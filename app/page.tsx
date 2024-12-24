import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Sponsors from "./components/sponsors";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sponsors />
      <Portfolio />
    </main>
  );
}
