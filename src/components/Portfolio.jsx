import { About } from "./about/About";
import { Home } from "./home/Home";
import { Navbar } from "./navbar/NavBar";
import { Skills } from "./skills/Skills";
import { Project } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { Footer } from "./footer/Footer";

export const Portfolio = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    )
}