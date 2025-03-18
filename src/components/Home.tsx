import {useColor} from "../context/ColorContext.tsx"
import {TypewriterEffect} from "./TypeWriterEffect.tsx"
import {Github, Linkedin, Youtube} from "lucide-react";
import 'aos/dist/aos.css';

export function Home() {
    const {color} = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    const words = [
        {
            text: "Frontend Developer",
        },
        {
            text: "Backend Developer",
        },
        {
            text: "UI/UX Designer",
            className: "text-primary",
        },
        {
            text: "full stack developer",
            className: "text-primary",
        },
    ]

    return (
        <section className="relative min-h-screen w-full overflow-hidden md:pl-30 md:pt-20 lg:px-30 lg:pl-40">
            <div
                className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center justify-center md:justify-between"
                style={{color: themeColor}}
                data-aos="fade-left"
                data-aos-delay="50"
            >
                {/* Text Content */}
                <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 z-10"
                     data-aos="fade-left"
                     data-aos-delay="50">
                    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter pb-2 md:py-4">Chathura
                        Sandaruwan</h1>
                    <div className="h-16 md:h-20">
                        <TypewriterEffect words={words} className="text-xl md:text-3xl font-medium"/>
                    </div>
                    <p className="text-lg md:text-xl py-4 md:py-6" style={{opacity: 0.8}}>
                        Welcome to my portfolio website. Navigate using the sidebar to explore my projects and learn
                        more about me.
                    </p>
                    {/*social media links*/}
                    <div className="relative flex items-center space-x-5 gap-4 mt-8"
                         data-aos="fade-up-left"
                         data-aos-delay="50">
                        <a
                            href="https://github.com/chathurasandaruwan"
                            className="p-2 rounded-full bg-background/80 hover:bg-white/20 border border-border/50 backdrop-blur-sm transition-colors"
                        >
                            <Github className="h-5 w-5"/>
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full bg-background/80 hover:bg-white/20 border border-border/50 backdrop-blur-sm transition-colors"
                        >
                            <Linkedin className="h-5 w-5"/>
                        </a>
                        <a
                            href="#"
                            className="p-2 rounded-full bg-background/80 hover:bg-white/20 border border-border/50 backdrop-blur-sm transition-colors"
                        >
                            <Youtube className="h-5 w-5"/>
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="relative order-1 md:order-2 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 z-10">
                    <div
                        className="relative w-full h-full rounded-full overflow-hidden p-1 bg-background/50 backdrop-blur-sm shadow-xl">
                        {/* Animated border effect */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: `linear-gradient(0deg, transparent, ${themeColor}, ${themeColor})`,
                                width: "w-80",
                                height: "h-80",
                                top: "-50%",
                                left: "-50%",
                                transformOrigin: "bottom right",
                                animation: 'animate 6s linear infinite',
                            }}
                        />
                        <div
                            className="absolute inset-0  "
                            style={{
                                background: `linear-gradient(0deg, transparent, ${themeColor}, ${themeColor})`,
                                width: "w-80",
                                height: "h-80",
                                top: "-50%",
                                left: "-50%",
                                transformOrigin: "bottom right",
                                animation: 'animate 6s linear infinite',
                                animationDelay: '-3s',
                            }}
                        />
                        {/* Profile image */}
                        <img
                            src="src/assets/images/home-Img.jpeg"
                            alt="Profile"
                            className="object-cover w-full h-full rounded-full relative z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

