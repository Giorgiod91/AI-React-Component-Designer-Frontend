import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import LandingPage from "./_components/LandingPage";
import AiComponentMaker from "./_components/AiComponentMaker";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Demo from "./_components/Demo";
import Payment from "./_components/Payment";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <main className="flex min-h-screen flex-col scroll-smooth bg-[#F4F7FA]">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center">
        <LandingPage />
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <AiComponentMaker />
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <About />
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <Demo />
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <Payment />
      </section>
    </main>
  );
}
