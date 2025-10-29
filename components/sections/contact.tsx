"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="contact" ref={ref} className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I&apos;m always interested in new opportunities and exciting
            projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">
                Let&apos;s work together
              </CardTitle>
              <p className="text-muted-foreground">
                Whether you have a project in mind or just want to chat about
                technology, I&apos;d love to hear from you.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href="mailto:hello@adesholly.dev"
                    className="flex items-center"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Send me an email
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <a href="#contact" className="flex items-center">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Start a conversation
                  </a>
                </Button>
              </div>

              <div className="border-t pt-6">
                <p className="mb-4 text-center text-sm text-muted-foreground">
                  Or connect with me on social media
                </p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={link.name}
                    >
                      <link.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
