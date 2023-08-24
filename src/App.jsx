import "./App.css";
import AboutMe from "./Components/AboutMe";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Experiance from "./Components/Experiance";
import Foot from "./Components/Foot";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <Navbar />
      <main className="w-11/12 mx-auto">
        <Banner />
        <AboutMe />
        <Services />
        <Experiance />
        <Contact />
      </main>
      <Foot />
    </>
  );
}

export default App;
