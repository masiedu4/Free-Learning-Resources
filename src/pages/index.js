import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <main className="bg-neutral-100 px-4 dark:bg-brand-900 h-full">
      {" "}
      <Header />
      <Hero />
      <Resources />
      <Footer />
    </main>
  );
}
