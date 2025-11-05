"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { skillsData } from "@/lib/data";

const skillCategories = {
  Frontend: ["JavaScript", "TypeScript", "Reactjs", "Nextjs", "Angular"],
  Backend: ["Nodejs", "Expressjs", "Python", "PHP", "Go Lang"],
  Database: ["SQL", "MongoDB", "GraphQL", "PostgreSQL"],
  "Cloud & DevOps": ["AWS", "GCP", "Docker", "Kubernetes", "Linux", "Ngnix"],
  Security: ["Vulnerability Assessment", "Penetration Testing", "IT Support"],
  Other: ["Machine Learning", "C++"],
};

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are the technologies I work with.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skillCategories).map(
              ([category, skills], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
