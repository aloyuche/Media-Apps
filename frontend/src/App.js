import Navbar from "./components/Navbar";
import About from "./container/About";
import Contact from "./container/Contacts";
import Experience from "./container/Experience";
import Home from "./container/Home";
import Portfolio from "./container/Portfolio";
import Social from "./container/Social";
//import Auth from "./container/Auth";

function App() {
  return (
    <div className="">
      <Navbar />
      <Home />
      <About />
      
      <Portfolio />
      
      <Experience />
      <Contact />

      <Social />
    </div>
  );
}

export default App;
