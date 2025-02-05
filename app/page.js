import Header from "./components/Header/Header";
import Section1 from "./components/Section-1/Section1";

export default function Home() {
        return (
                <div className="bg-black mx-w-[1500px] flex justify-center flex-col">
                        <Header/>
                        <Section1/>
                </div>
        );
}
