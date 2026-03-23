import { Suspense } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { PlayerCardSection } from "./components/PlayerCardSection/PlayerCardSection";
import PlayerContext from "./context/PlayerContext";

const App = () => {
  return (
    <PlayerContext>
      <main className="max-w-6xl mx-auto my-2">
        <Navbar />
        <Hero />
        <Suspense fallback={<span className="loader loading-spinner"></span>}>
          <PlayerCardSection />
        </Suspense>
      </main>
    </PlayerContext>
  );
};

export default App;
