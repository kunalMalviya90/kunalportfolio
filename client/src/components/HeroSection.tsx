import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const roles = ["Software Engineer", "MERN Developer", "Java DSA"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let currentText = "";
    let charIndex = 0;
    const currentRole = roles[roleIndex];

    const typeInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        currentText += currentRole[charIndex];
        setDisplayText(currentText);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (currentText.length > 0) {
              currentText = currentText.slice(0, -1);
              setDisplayText(currentText);
            } else {
              clearInterval(deleteInterval);
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
              Hi, I'm  👋
            </h2>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              KUNAL MALVIYA
            </motion.h1>
          </motion.div>

          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
                className="text-primary"
              >
                |
              </motion.span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Building scalable web applications with clean, efficient code
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-secondary hover-elevate active-elevate-2"
              asChild
              data-testid="button-github"
            >
              <a
                href="https://github.com/kunalMalviya90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover-elevate active-elevate-2"
              asChild
              data-testid="button-linkedin"
            >
              <a
                href="https://linkedin.com/in/kunalmalviya07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover-elevate active-elevate-2"
              asChild
              data-testid="button-email"
            >
              <a href="mailto:malviyakunal90@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover-elevate active-elevate-2"
              asChild
              data-testid="button-email"
            >
              <a href="https://drive.google.com/file/d/10hXldI1Hevp18efTv2FGG3oy7-R0rIIN/view?usp=drivesdk">
                <Mail className="w-5 h-5 mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
