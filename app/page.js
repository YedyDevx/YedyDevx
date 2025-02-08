import Header from "./components/Header/Header";
import Section1 from "./components/Section-1/Section1";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Stacks from "./components/Stacks/Stacks";
import Footer from "./components/Footer/Footer";

export default function Home() {
        return (
                <div className="bg-black mx-w-[1500px] flex justify-center flex-col">
                        <Header/>
                        <Section1 />
                        <Stacks />
                        <Projects />
                        <Contact />
                        <Footer/>
                </div>
        );
}
