import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Employee Complaint Portal",
    description:
      "A comprehensive complaint management system built with MERN stack, featuring real-time updates, role-based authentication, and automated email notifications. Employees can submit, track, and resolve complaints efficiently.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/kunalMalviya90/employee-complaint-portal-frontend",
    gradient: "from-primary to-secondary",
  },
  {
    title: "OnlineRoomWala",
    description:
      "Full-featured rental management platform with authentication, CRUD operations for property listings, advanced search filters, and booking management. Includes admin dashboard for property verification.",
    tech: ["PHP", "MySQL", "JavaScript", "HTML" , "CSS"],
    github: "https://github.com/kunalMalviya90/OnlineRoomWala",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Microservices-based inventory system built with Spring Boot featuring role-based login, real-time stock tracking, automated reordering, supplier management, and comprehensive reporting with data analytics.",
    tech: ["Java", "Spring Boot", "MySQL","frontend"],
    github: "https://github.com/malviyakunal90/",
    gradient: "from-accent to-primary",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.03,
              }}
              style={{ perspective: "1000px" }}
            >
              <Card
                className="glass-effect p-6 h-full flex flex-col hover-elevate"
                data-testid={`project-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className={`w-full h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
                />
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="hover-elevate"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 hover-elevate active-elevate-2"
                    asChild
                    data-testid={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover-elevate active-elevate-2"
                    asChild
                    data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
