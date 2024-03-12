import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLink";



export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Portfolio />
      <Experience />
      <SocialLinks />
    </div>
  )
}
