import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { Code2, Coffee, Database } from "lucide-react";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#FFFFFF" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Java", icon: Coffee, color: "#007396" },
  { name: "Python", icon: Code2, color: "#007396" },
  { name: "C & C++", icon: Coffee, color: "#007396" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "AWS", icon: Database, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "DSA", icon: Code2, color: "#00BFFF" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
              >
                <Card
                  className="glass-effect p-6 flex flex-col items-center justify-center gap-4 hover-elevate group"
                  data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon
                      className="w-12 h-12 md:w-16 md:h-16"
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground text-center">
                    {skill.name}
                  </h3>
                  <motion.div
                    className="w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
