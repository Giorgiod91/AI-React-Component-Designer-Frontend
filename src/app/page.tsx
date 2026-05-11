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

      {/* 1. Hero with slideshow */}
      <section id="hero">
        <LandingPage />
      </section>

      {/* 2. Try it yourself – right after hero */}
      <section id="get-started">
        <AiComponentMaker />
      </section>

      {/* 3. Features */}
      <section id="features">
        <About />
      </section>

      {/* 4. Demo gallery */}
      <section id="demo">
        <Demo1 />
      </section>

      {/* 5. Pricing */}
      <section id="pricing">
        <Payment />
      </section>

      <Footer />
    </main>
  );
}
