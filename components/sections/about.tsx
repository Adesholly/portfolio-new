"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { experienceYears } from "@/lib/utils";

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here&apos;s a bit about my background and what I do.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <p className="text-lg leading-8">
                  I&apos;m a passionate full-stack developer with over{" "}
                  {experienceYears} years of experience building modern web
                  applications. I love creating solutions that are not only
                  functional but also provide exceptional user experiences.
                </p>

                <p className="mt-4 text-lg leading-8">
                  My journey in tech started with a curiosity about how websites
                  work, which led me to explore various technologies and
                  frameworks. Today, I specialize in React, Next.js, Node.js,
                  and cloud technologies, but I&apos;m always eager to learn and
                  adapt to new tools and methodologies.
                </p>

                <p className="mt-4 text-lg leading-8">
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community. I believe in
                  continuous learning and staying up-to-date with the latest
                  trends in web development.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
