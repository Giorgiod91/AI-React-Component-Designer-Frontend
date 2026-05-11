import LandingPage from "./_components/LandingPage";
import AiComponentMaker from "./_components/AiComponentMaker";
import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Payment from "./_components/Payment";
import Demo1 from "./_components/Demo1";
import Footer from "./_components/Footer";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#09090B]">
      <Navbar />
      <section id="hero">
        <LandingPage />
      </section>
      <section id="features">
        <About />
      </section>
      <section id="get-started">
        <AiComponentMaker />
      </section>
      <section id="demo">
        <Demo1 />
      </section>
      <section id="pricing">
        <Payment />
      </section>
      <Footer />
    </main>
  );
}
