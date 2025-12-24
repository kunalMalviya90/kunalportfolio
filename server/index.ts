import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

/* =======================
   RAW BODY SUPPORT
======================= */
declare module "http" {
  interface IncomingMessage {
    rawBody?: Buffer;
  }
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use(express.urlencoded({ extended: false }));

/* =======================
   REQUEST LOGGER
======================= */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = (bodyJson: any) => {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson);
  };

  res.on("finish", () => {
    if (!path.startsWith("/api")) return;

    const duration = Date.now() - start;
    let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;

    if (capturedJsonResponse) {
      logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
    }

    if (logLine.length > 100) {
      logLine = logLine.slice(0, 99) + "…";
    }

    log(logLine);
  });

  next();
});

/* =======================
   SERVER BOOTSTRAP
======================= */
(async () => {
  const server = await registerRoutes(app);

  /* ---------- ERROR HANDLER ---------- */
  app.use(
    (err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err?.status || err?.statusCode || 500;
      const message = err?.message || "Internal Server Error";

      res.status(status).json({ message });

      if (app.get("env") === "development") {
        console.error(err);
      }
    }
  );

  /* ---------- VITE / STATIC ---------- */
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  /* ---------- LISTEN (WINDOWS SAFE) ---------- */
  const PORT = Number(process.env.PORT) || 5000;

  server.listen(PORT, "127.0.0.1", () => {
    log(`🚀 Server running at http://localhost:${PORT}`);
  });
})();
