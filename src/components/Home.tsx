import {useColor} from "../context/ColorContext.tsx";

export function Home() {
    const { color } = useColor()

    const themeColor = {
        white: "#ffffff",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    return (
        <section className="relative min-h-screen">
            <div className="container mx-auto px-4 py-16 md:pl-34" style={{color: themeColor}}>
                <div
                    className="relative w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 p-1 bg-background/50 backdrop-blur-sm shadow-xl ">
                    <div
                        className="absolute rounded-full"/>
                    <img
                        src="src/assets/images/my-img.jpeg"
                        alt="Profile"
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
                <h1 className="mb-6 text-4xl font-bold md:text-6xl">My Portfolio</h1>
                <p className="text-xl" style={{opacity: 0.8}}>
                    Welcome to my portfolio website. Navigate using the sidebar to explore my projects and learn more
                    about
                    me.
                </p>
            </div>
        </section>
    );
}