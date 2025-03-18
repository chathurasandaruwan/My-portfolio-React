import {useColor} from "../context/ColorContext.tsx";
import {useState} from "react";
import {ArrowRight, ExternalLink, Github} from "lucide-react";
import {Footer} from "./Footer.tsx";

export function Projects() {
    const {color} = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    const [activeFilter, setActiveFilter] = useState("All")

    const filters = ["All", "Web App", "Mobile", "UI/UX", 'Standard App']

    const projects = [
        {
            title: "Modern Book Store",
            description:
                "A fully responsive Book Store with advanced filtering, cart functionality, and payment integration.",
            image: "src/assets/gif/project-1.gif",
            tags: ["React", "TypeScript", "Tailwind CSS", "Redux", "Node", "Mysql", "JWT"],
            category: "Web App",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/Book-Store-frontend-react.git",
        },
        {
            title: "Book Store Admin Dashboard",
            description: "An admin panel for managing books, orders, and users. Features include role-based authentication, analytics, and real-time updates.",
            image: "src/assets/gif/project-2.gif",
            tags: ["React", "TypeScript", "Tailwind CSS", "Redux"],
            category: "Web App",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/Book-Store-Admin-Panel-React.git",
        },
        {
            title: "Book Store Admin Dashboard",
            description:
                "A simple mobile app created to manage book store data. Currently under development.",
            image: "src/assets/gif/project-3.gif",
            tags: ["React-Native", "TypeScript"],
            category: "Mobile",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/Book-Store-Admin-Panel-Mobile.git",
        },
        {
            title: "Green Shadow",
            description:
                "A crop monitoring log system designed to track plant health, store status as log, and optimize farming efficiency with a user-friendly UI.",
            image: "src/assets/gif/project-4.gif",
            tags: ["React", "Tailwind CSS", "TypeScript"],
            category: "UI/UX",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/Green-Shadow-Frontend-React.git",
        },
        {
            title: "Pos System",
            description:
                "A Point-of-Sale system built with Spring and MySQL, offering product management, sales tracking, and invoice generation for retail businesses.",
            image: "src/assets/gif/project-5.gif",
            tags: ["HTML/CSS", "JavaScript", "Boostrap CSS", "Spring", "Mysql"],
            category: "Web App",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/POS-System-Main.git",
        },
        {
            title: "Green Shadow Web",
            description:
                "A web-based version of the Green Shadow crop monitoring log system, with real-time data visualization and analysis.",
            image: "src/assets/gif/project-4.gif",
            tags: ["HTML/CSS", "JavaScript", "Boostrap CSS", "Spring Boot", "Mysql", "JWT"],
            category: "Web App",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/Green-Shadow-Frontend.git",
        },
        {
            title: "My Portfolio-V1",
            description:
                "A simple and elegant portfolio website showcasing my projects, skills, and experience using HTML and CSS.",
            image: "src/assets/gif/project-7.gif",
            tags: ["HTML/CSS"],
            category: "UI/UX",
            liveLink: "https://chathurasandaruwan.github.io/MyPortfolio/",
            githubLink: "https://github.com/chathurasandaruwan/MyPortfolio.git",
        },
        {
            title: "Simple Calculator",
            description:
                "A basic calculator web application built with HTML, CSS, and JavaScript, supporting addition, subtraction, multiplication, and division.",
            image: "src/assets/gif/project-8.gif",
            tags: ["HTML/CSS", "JavaScript"],
            category: "UI/UX",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/Calculator-with-js.git",
        },
        {
            title: "Library Management System",
            description:
                "A JavaFX-based application for managing library books ,branches ,and borrow/return transactions using Hibernate and MySQL.",
            image: "src/assets/gif/project-9.gif",
            tags: ["JavaFX", "Scene Builder", "Mysql", "Hibernate"],
            category: "Standard App",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/ORM-coursework-library-management-system.git",
        },
        {
            title: "Tailor Shop Management System",
            description:
                "A desktop application designed to manage orders, customers, and invoices for tailor shops using JavaFX and MySQL.",
            image: "src/assets/gif/project-10.gif",
            tags: ["JavaFX", "Scene Builder", "Mysql"],
            category: "Standard App",
            liveLink: "#",
            githubLink: "https://github.com/chathurasandaruwan/First-Semester-Final-T_shop.git",
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
                            <div
                                className="overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm h-full hover:shadow-lg transition-shadow duration-300">
                                <div className="relative overflow-hidden">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div
                                        className="absolute inset-0 bg-black/70 from-background/90 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={project.liveLink}
                                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:cursor-pointer"
                                        >
                                            <ExternalLink className="h-5 w-5"/>
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border-white/40 text-white hover:bg-white/30 hover:cursor-pointer"
                                        >
                                            <Github className="h-5 w-5"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div
                                        className="mb-2 bg-primary/10 text-primary border-primary/20">{project.category}</div>
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex}
                                                  className="px-2 py-1 bg-white/10 text-muted-foreground text-xs rounded-full">
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                    <button
                                        className="group/btn hover:text-blue-500 inline-flex items-center border rounded-full p-2 md:hidden">
                                        View Project
                                        <ArrowRight
                                            className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Footer/>
            </div>
        </section>
    );
}