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
        <div className="container mx-auto px-4 py-16 md:pl-34" style={{ color: themeColor }}>
            <h1>Home</h1>
        </div>
    );
}