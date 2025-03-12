import {useColor} from "../context/ColorContext.tsx";

export function Home() {
    const { color } = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    return (
        <section className="relative min-h-screen">
            <div className="container mx-auto px-4 py-16 md:pl-34" style={{color: themeColor}}>
                <div
                    className="relative md:absolute md:right-80 md:top-50 w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden p-1 bg-background/50 backdrop-blur-sm shadow-xl animate-spin-border">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(0deg, transparent, ${themeColor}, ${themeColor})`,
                            width: 'w-80',
                            height: 'h-80',
                            top: '-50%',
                            left: '-50%',
                            position: 'absolute',
                            transformOrigin: 'bottom right',
                            animation: 'animate 6s linear infinite',
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(0deg, transparent, ${themeColor}, ${themeColor})`,
                            width: 'w-80',
                            height: 'h-80',
                            top: '-50%',
                            left: '-50%',
                            position: 'absolute',
                            transformOrigin: 'bottom right',
                            animation: 'animate 6s linear infinite',
                            animationDelay: '-3s',
                        }}
                    />
                    <img
                        src="src/assets/images/my-img.jpeg"
                        alt="Profile"
                        className="object-cover w-full h-full rounded-full relative z-10"
                    />
                </div>

                <div className="md:mr-140 md:mt-40">
                    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground md:pt-4">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter pb-4">
                        Chathura Sandaruwan
                    </h1>
                    <p className="text-xl md:py-8" style={{opacity: 0.8}}>
                        Welcome to my portfolio website. Navigate using the sidebar to explore my projects and learn
                        more
                        about
                        me.
                    </p>
                </div>
            </div>
        </section>
    );
}