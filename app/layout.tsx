import type { Metadata } from "next";
import { Mona_Sans, Work_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arsh Vasani — Front-End Developer",
  description:
    "Front-End Developer building responsive web interfaces with React, Next.js, and HTML/CSS. Reusable components, clear layouts, and modern web standards.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Arsh Vasani — Front-End Developer",
    description:
      "Front-End Developer in Ahmedabad building responsive web interfaces with React, Next.js and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn(monaSans.variable, workSans.variable)}>
      <body className="min-h-screen bg-paper font-body text-ink antialiased selection:bg-ink selection:text-cardinal">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}