import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profileImage from '../assets/generated_images/ProfilePhotoCV.jpg';


export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 10,
              }}
              transition={{ duration: 0.3 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg opacity-50 blur-xl" />
                <img
                  src={profileImage}
                  alt="Kunal Malviya"
                  className="relative w-full h-full object-cover rounded-lg border-2 border-primary/30"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-effect p-8 hover-elevate">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                I'm a passionate Software Engineer pursuing a 5-year Integrated MCA from IIPS, Indore.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Skilled in <span className="text-primary font-semibold">MERN Stack</span>,{" "}
                <span className="text-secondary font-semibold">Java (Core & Advanced)</span>,{" "}
                <span className="text-accent font-semibold"></span> and Data Structures.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I love building scalable web applications and solving real-world problems with clean, efficient code.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
