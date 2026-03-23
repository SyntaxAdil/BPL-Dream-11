import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <main className="max-w-6xl mx-auto my-2">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default App;
