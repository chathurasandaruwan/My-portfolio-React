import {useColor} from "../context/ColorContext.tsx";
import {useState} from "react";
import {ArrowRight, ExternalLink, Github} from "lucide-react";

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
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="group">
                            <div className="overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm h-full hover:shadow-lg transition-shadow duration-300">
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black/70 from-background/90 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <button
                                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:cursor-pointer"
                                        >
                                            <ExternalLink className="h-5 w-5" />
                                        </button>
                                        <button
                                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:cursor-pointer"
                                        >
                                            <Github className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 bg-primary/10 text-primary border-primary/20">{project.category}</div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2 py-1 bg-white/10 text-muted-foreground text-xs rounded-full">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                    <button className="group/btn hover:text-blue-500 inline-flex items-center border rounded-full p-2 md:hidden">
                                        View Project
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        </div>
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