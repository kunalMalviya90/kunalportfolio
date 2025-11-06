import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { motion } from "framer-motion";
import logoImage from '../assets/generated_images/developer.png';


export function Header() {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={logoImage}
              alt="Developer Logo"
              className="w-10 h-10 md:w-12 md:h-12"
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-lg md:text-xl font-bold gradient-text">
              Kunal Malviya
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            data-testid="button-theme-toggle"
            className="hover-elevate"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
