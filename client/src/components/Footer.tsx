import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="relative py-12 glass-effect">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              className="hover-elevate active-elevate-2"
              asChild
              data-testid="footer-button-github"
            >
              <a
                href="https://github.com/malviyakunal90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover-elevate active-elevate-2"
              asChild
              data-testid="footer-button-linkedin"
            >
              <a
                href="https://linkedin.com/in/kunalmalviya07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover-elevate active-elevate-2"
              asChild
              data-testid="footer-button-email"
            >
              <a href="mailto:malviyakunal90@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <motion.p
            className="text-muted-foreground text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            © {new Date().getFullYear()} Kunal Malviya. Built with React & JS.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
