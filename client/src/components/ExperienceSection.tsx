import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <div className="flex items-start gap-8">
                <div className="hidden md:flex flex-1 justify-end">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background absolute left-1/2 transform -translate-x-1/2 mt-6" />
                </div>
                <div className="md:flex-1 pl-16 md:pl-0">
                  <Card className="glass-effect p-6 hover-elevate" data-testid="experience-imc-intern">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          IT Intern
                        </h3>
                        <p className="text-secondary font-semibold">
                          Indore Municipal Corporation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">July 2024 - September 2024</span>
                    </div>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span>
                          Developed and maintained web applications for municipal services
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span>
                          Collaborated with cross-functional teams to implement new features
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span>
                          Optimized database queries and improved application performance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span>
                          Assisted in debugging and resolving technical issues
                        </span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
