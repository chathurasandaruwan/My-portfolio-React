import {useColor} from "../context/ColorContext.tsx";

export function Contact() {
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
                contact
            </div>
        </section>
);
}