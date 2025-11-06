import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Integrated MCA",
    institution: "International Institute Of Professional Studies ,IIPS DAVV Indore",
    period: "2021 - Present",
    description: "5-year Integrated Master of Computer Applications program with focus on Software Engineering, Data Structures, and Advanced Java.",
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Narmada Convent HS School",
    period: "2020 - 2021",
    description: "Science stream with Physics, Chemistry, and Mathematics (PCM).",
  },
  {
    degree: "Secondary (10th)",
    institution: "Narmada Convent HS School",
    period: "2018 - 2019",
    description: "Completed secondary education with distinction.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className="glass-effect p-6 h-full hover-elevate"
                data-testid={`education-${edu.degree.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {edu.degree}
                    </h3>
                  </div>
                </div>
                <p className="text-secondary font-semibold mb-3">
                  {edu.institution}
                </p>
                <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{edu.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {edu.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
