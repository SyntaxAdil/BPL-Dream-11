import { Suspense } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { PlayerCardSection } from "./components/PlayerCardSection/PlayerCardSection";
import { Toaster } from "react-hot-toast";

import PlayerContext from "./context/PlayerContext";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <PlayerContext>
        <Navbar />
      <main className="max-w-6xl mx-auto my-2 mt-10 md:mt-30">
        <Hero />
        <Suspense fallback={<span className="loader loading-spinner"></span>}>
          <PlayerCardSection />
        </Suspense>
      </main>
        <Footer/>
      <Toaster position="top-center"  reverseOrder={false} />{" "}
    </PlayerContext>
  );
};

export default App;
