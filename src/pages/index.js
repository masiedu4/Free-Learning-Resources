import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="bg-neutral-100  dark:bg-brand-900 h-full min-w-full">
        {" "}
        <Header />
        <Hero />
        <Resources />
        <Footer />
      </main>
    </>
  );
}
