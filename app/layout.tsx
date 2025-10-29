import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@/components/analytics/analytics";
import { SideRail } from "@/components/ui/side-rail";
import { SiteHeader } from "@/components/ui/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adesholly | Full-Stack Developer",
    template: "%s | Adesholly",
  },
  description:
    "Full-stack developer with 8+ years of experience building modern web applications. Specialized in React, Next.js, Node.js, and cloud technologies.",
  keywords: [
    "full-stack developer",
    "react",
    "nextjs",
    "typescript",
    "nodejs",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Adesholly" }],
  creator: "Adesholly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adesholly.vercel.app/",
    title: "Adesholly | Full-Stack Developer",
    description:
      "Full-stack developer with 8+ years of experience building modern web applications.",
    siteName: "Adesholly Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adesholly | Full-Stack Developer",
    description:
      "Full-stack developer with 8+ years of experience building modern web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adesholly",
              url:
                process.env.NEXT_PUBLIC_SITE_URL ||
                "https://adesholly.vercel.app/",
              sameAs: [
                "https://github.com/adesholly",
                "https://www.linkedin.com/in/adesholly/",
                "https://x.com/ade_sholly11",
              ],
              jobTitle: "Full-Stack Developer",
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen">
            {/* Side Rail - Desktop Only */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
              <SideRail />
            </div>

            {/* Main Content */}
            <div className="flex flex-1 flex-col lg:pl-72">
              {/* Mobile Header */}
              <SiteHeader />

              {/* Page Content */}
              <main className="flex-1">{children}</main>
            </div>
          </div>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
