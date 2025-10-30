"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks, RESUME_URL } from "@/lib/data";
import { experienceYears } from "@/lib/utils";

export function Intro() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Hi, I&apos;m <span className="text-primary">Ibrahim</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            A full-stack developer with {experienceYears}+ years of experience
            building modern web applications. I specialize in React, Next.js,
            Node.js, and cloud technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* <Button asChild size="lg" className="group">
            <a href={RESUME_URL} download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button> */}

          <Button asChild size="lg" className="group">
            <a href="/resume">Preview Resume</a>
          </Button>

          <Button asChild size="lg" variant="outline" className="group">
            <a href="#contact">
              <MessageCircle className="mr-2 h-4 w-4" />
              Start a conversation
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <a
            href="#about"
            className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="mr-2">Scroll down</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
