import {useColor} from "../context/ColorContext.tsx";
import {useState} from "react";

export function Projects() {
    const {color} = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    const [activeFilter, setActiveFilter] = useState("All")

    const filters = ["All", "Web App", "Mobile", "UI/UX"]

    const projects = [
        {
            title: "Modern E-commerce Platform",
            description:
                "A fully responsive e-commerce platform with advanced filtering, cart functionality, and payment integration.",
            image: "src/assets/gif/Project1.gif",
            tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
            category: "Web App",
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Creative Portfolio Website",
            description: "A creative portfolio website with smooth animations and responsive design for a digital artist.",
            image: "src/assets/gif/Project1.gif",
            tags: ["React", "CSS Animations", "Tailwind CSS"],
            category: "UI/UX",
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Task Management Dashboard",
            description:
                "A productivity app for managing tasks with drag-and-drop functionality and team collaboration features.",
            image: "src/assets/gif/Project1.gif",
            tags: ["React", "TypeScript", "Redux", "Firebase"],
            category: "Web App",
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Weather Visualization App",
            description:
                "A weather application that displays current and forecasted weather data with beautiful visual representations and interactive maps.",
            image: "src/assets/gif/Project1.gif",
            tags: ["React", "API Integration", "Chart.js", "Mapbox"],
            category: "Web App",
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Mobile Fitness Tracker",
            description:
                "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with personalized insights.",
            image: "src/assets/gif/Project1.gif",
            tags: ["React Native", "TypeScript", "Firebase", "Redux"],
            category: "Mobile",
            liveLink: "#",
            githubLink: "#",
        },
        {
            title: "Restaurant Ordering System",
            description:
                "A complete ordering system for restaurants with real-time updates, menu management, and payment processing.",
            image: "src/assets/gif/Project1.gif",
            tags: ["React", "Node.js", "MongoDB", "Socket.io"],
            category: "Web App",
            liveLink: "#",
            githubLink: "#",
        },
    ]
    const filteredProjects =
        activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

    return (
        <section className="relative min-h-screen w-full overflow-hidden md:pl-30 md:pt-20 lg:px-30 lg:pl-40 ">
            <div
                className="container mx-auto px-4 py-18 md:py-16"
                style={{color: themeColor}}
            >
                <h1 className="mb-3 text-2xl font-bold md:text-5xl">My Work</h1>
                <p className="text-lg md:text-xl py-4 md:pb-10" style={{opacity: 0.8}}>
                    Here are some of my recent projects. Each project was built with a focus on performance, responsive
                    design, and user experience.
                </p>
                <div className="flex flex-wrap justify-center gap-2 md:gap-8 mb-12">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                                className={`rounded-full bg-white/10 ${activeFilter === filter ? "default" : "outline"} px-3 py-1 text-sm`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
                {/*<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="rounded-lg bg-white/5 p-6 backdrop-blur-sm">
                            <h2 className="mb-3 text-2xl font-semibold">{project.title}</h2>
                            <p className="mb-4 text-lg" style={{opacity: 0.8}}>
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="rounded-full bg-white/10 px-3 py-1 text-sm">
                  {tech}
                </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>*/}
            </div>
        </section>
    );
}