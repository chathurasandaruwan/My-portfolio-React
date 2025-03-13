import {useColor} from "../context/ColorContext.tsx";
import {ArrowDown} from "lucide-react";

export function About() {

    const {color} = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    return (
        <section className="relative min-h-screen w-full overflow-hidden md:pl-30 md:pt-20 lg:px-30 lg:pl-40 ">
            <div
                className="container mx-auto px-4 py-18 md:py-16"
                style={{color: themeColor}}
            >
                <h1 className="mb-6 text-4xl font-bold md:text-6xl">About Me</h1>
                <p className="text-lg md:text-xl py-4 md:py-6" style={{opacity: 0.8}}>
                    I am an enthusiastic and driven undergraduate student at the Institute of Software Engineering
                    (IJSE) in Panadura,
                    pursuing a Bachelor's degree in Software Engineering. With a keen interest in web development, I am
                    building strong
                    skills in Frontend and Backend Development, Web Data Scraping, and Database Handling. My goal is to
                    leverage my technical
                    knowledge and hands-on experience to contribute effectively to dynamic projects and to grow within
                    the ever-evolving field
                    of software engineering. I am passionate about coding, problem-solving, and continuous learning, and
                    I thrive in both
                    collaborative and independent work environments. I am committed to expanding my skill set and
                    applying my knowledge to
                    real-world challenges in the software industry.
                </p>
                <button type='button'
                        className=" group mt-6 inline-flex items-center rounded-full px-12 py-3 text-sm bg-white/10 font-medium hover:bg-white/20 hover:cursor-pointer border"
                        style={{borderColor: themeColor}}>
                    Download CV
                    <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1"/>
                </button>
            </div>
        </section>
    );
}