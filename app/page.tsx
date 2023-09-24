"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="bg-neutral-100  dark:bg-brand-900 h-full w-full">
        <Header />
        <Hero />
        <Resources />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
