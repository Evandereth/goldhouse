import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advisors from "./components/Advisors";
import SmartHomes from "./components/SmartHomes";
import Services from "./components/Services";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Advisors />
        <SmartHomes />
        <Services />
        <Catalog />
      </main>
      <Footer />
    </>
  );
}