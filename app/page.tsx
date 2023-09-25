"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <main className="bg-neutral-100  dark:bg-brand-900 h-full w-full">
      <Header />
      <Hero />
      <Resources />
      <Footer />
    </main>
  );
}
