"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { socialLinks } from "@/lib/data";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function SideRail() {
  const pathname = usePathname();

  return (
    <div
      className="flex grow flex-col gap-y-5 overflow-y-auto bg-background px-6 pb-4"
      aria-label="Main navigation"
    >
      <div className="flex h-16 shrink-0 items-center">
        <Link
          href="/"
          className="flex items-center space-x-2"
          aria-label="Adesholly - Home"
        >
          <div className="h-8 w-8 rounded-full bg-primary" aria-hidden="true" />
          <span className="text-xl font-bold">Adesholly</span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="ml-auto h-2 w-2 rounded-full bg-primary"
                          layoutId="activeIndicator"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="mt-auto">
            <div className="flex items-center justify-between">
              <div
                className="flex space-x-4"
                role="list"
                aria-label="Social links"
              >
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    aria-label={`${link.name} - Opens in new tab`}
                  >
                    <link.icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
