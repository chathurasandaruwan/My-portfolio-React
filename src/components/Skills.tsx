import {useColor} from "../context/ColorContext.tsx";
import {Code, Database, Figma, FileJson, GitBranch, Globe, Terminal} from "lucide-react";
import SkillCard from "./SkillCard.tsx";
import {Footer} from "./Footer.tsx";

export function Skills() {

    const {color} = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    const skills = [
        {
            name: "Java & Spring Boot",
            icon: Code,
            color: "bg-blue-500/90",
            level: 95,
        },
        {
            name: "React & React Native",
            icon: Code,
            color: "bg-blue-700/90",
            level: 90,
        },
        {
            name: "JavaScript/TypeScript",
            icon: FileJson,
            color: "bg-cyan-500/90",
            level: 95,
        },
        {
            name: "UI/UX Design",
            icon: Figma,
            color: "bg-purple-500/90",
            level: 75,
        },
        {
            name: "Python",
            icon: Terminal,
            color: "bg-green-500/90",
            level: 80,
        },
        {
            name: "HTML/CSS",
            icon: Globe,
            color: "bg-yellow-500/90",
            level: 85,
        },
        {
            name: "Git & GitHub",
            icon: GitBranch,
            color: "bg-orange-500/90",
            level: 80,
        },
        {
            name: "RESTful APIs",
            icon: Globe,
            color: "bg-red-500/90",
            level: 85,
        },
        {
            name: "MongoDB & MySQL",
            icon: Database,
            color: "bg-indigo-500/90",
            level: 85,
        },
    ]

    return (
        <section className="relative min-h-screen w-full overflow-hidden md:pl-30 md:pt-10 lg:px-30 lg:pl-40 ">
            <div
                className="container mx-auto px-4 pt-18 pb-6 md:py-16"
                style={{color: themeColor}}
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="max-w-2xl mx-auto">
                        As a software engineer, I've developed expertise in various technologies
                        and frameworks, allowing me to build robust and scalable applications.
                    </p>
                </div>
                <div
                    className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"}
                >
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            name={skill.name}
                            icon={skill.icon}
                            level={skill.level}
                            style={skill.color}
                            themeColor={themeColor}
                        />
                    ))}
                </div>
                <Footer/>
            </div>
        </section>
    );
}