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
      <div className=" py-6 pb-10 bg-gradient-to-b from-gray-800 to-gray-600 h-4">
        <hr />
      </div>
      <Experience />
      <Contact />

      <Social />
    </div>
  );
}

export default App;
