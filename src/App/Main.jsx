import "../App.css";
import Nav from "./Navigation";
import Header from "./Header";
import DumpardDiv from "./dumpyard-div";
import About from "./about";
import Contact from "./contact";
import MoreWorkMain from "./more-work-main";
import Work from "./work";
import Footer from "./footer";
import { Fade } from "react-awesome-reveal";


function Main() {
  return (
    <div className="App">
      <Fade delay={20} duration={600} triggerOnce>
        <Nav />
        <Header />

        <section id="dumpyard">
          <DumpardDiv />
        </section>
        <section id="work">
          <Work />
        </section>
        <MoreWorkMain />
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
          <Footer />
        </section>
      </Fade>
      
    </div>
  );
}

export default Main;
