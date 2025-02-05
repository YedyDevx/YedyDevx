import Header from "./components/Header/Header";
import Section1 from "./components/Section-1/Section1";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Stacks from "./components/Stacks/Stacks";
export default function Home() {
        return (
                <div className="bg-black mx-w-[1500px] flex justify-center flex-col">
                        <Header/>
                        <Section1 id="section1"/>
                        <Stacks id="stacks"/>
                        <Projects id="projects"/>
                        <Contact id="contact"/>
                </div>
        );
}
