import {useColor} from "../context/ColorContext.tsx";
import {Code, Database, Figma, GitBranch, Globe, Layers, Smartphone, Zap} from "lucide-react";
import SkillCard from "./SkillCard.tsx";

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
            name: "React",
            icon: Code,
            color: "bg-blue-500/90",
            level: 95,
        },
        {
            name: "TypeScript",
            icon: Code,
            color: "bg-blue-700/90",
            level: 90,
        },
        {
            name: "Tailwind CSS",
            icon: Layers,
            color: "bg-cyan-500/90",
            level: 95,
        },
        {
            name: "UI/UX Design",
            icon: Figma,
            color: "bg-purple-500/90",
            level: 85,
        },
        {
            name: "Responsive Design",
            icon: Smartphone ,
            color: "bg-green-500/90",
            level: 90,
        },
        {
            name: "Performance",
            icon: Zap ,
            color: "bg-yellow-500/90",
            level: 85,
        },
        {
            name: "Git & GitHub",
            icon: GitBranch ,
            color: "bg-orange-500/90",
            level: 80,
        },
        {
            name: "RESTful APIs",
            icon: Globe ,
            color: "bg-red-500/90",
            level: 85,
        },
        {
            name: "Database Design",
            icon: Database,
            color: "bg-indigo-500/90",
            level: 75,
        },
    ]

    return (
        <section className="relative min-h-screen w-full overflow-hidden md:pl-30 md:pt-20 lg:px-30 lg:pl-40 ">
            <div
                className="container mx-auto px-4 py-18 md:py-16"
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
                        />
                    ))}
                </div>
                </div>
        </section>
);
}