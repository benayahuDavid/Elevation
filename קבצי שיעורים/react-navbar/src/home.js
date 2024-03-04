import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/heroSection";
import RegForm from "./components/regForm/regForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <RegForm />
      </main>
    </div>
  );
}
