import Link from "next/link";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import AiComponentMaker from "./_components/AiComponentMaker";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Payment from "./_components/Payment";
import Demo1 from "./_components/Demo1";
import Footer from "./_components/Footer";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col scroll-smooth bg-[#F4F7FA]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <LandingPage />
      </section>
      <section
        id="get-started"
        className="flex min-h-screen items-center justify-center"
      >
        <AiComponentMaker />
      </section>
      <section
        id="about"
        className="flex min-h-screen items-center justify-center"
      >
        <About />
      </section>
      <section
        id="demo"
        className="flex min-h-screen items-center justify-center"
      >
        <Demo1 />
      </section>
      <section
        id="pricing"
        className="flex min-h-screen items-center justify-center"
      >
        <Payment />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
