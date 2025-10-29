import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock next-themes
vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "dark",
    setTheme: vi.fn(),
  }),
}));

// Mock next/navigation
vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

// Mock framer-motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const React = require("react");
      return React.createElement("div", props, children);
    },
    span: ({ children, ...props }: any) => {
      const React = require("react");
      return React.createElement("span", props, children);
    },
  },
}));
