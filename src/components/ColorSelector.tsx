import {Palette} from "lucide-react";
import {useState} from "react";
import {Color, useColor} from "../context/ColorContext.tsx";

export function ColorSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const { setColor } = useColor()

    const colors = [
        { value: "white", label: "White" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
        { value: "blue", label: "Blue" },
    ];

    return (
        <div
            className={"fixed group  right-4 top-4 z-40 bg-white/20 text-white backdrop-blur-md flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:bg-white/10 hover:cursor-pointer"}
            aria-label={'Change-Theme'}
            onClick={()=>setIsOpen(!isOpen)}
        >
            <Palette className="h-5 w-5"/>
            <span
                className="absolute right-16 z-500 whitespace-nowrap rounded-md bg-white/80 px-2 py-1 text-xs text-black opacity-1 transition-opacity group-hover:opacity-100 md:block">
          Change-Theme
        </span>
            {isOpen && (
                <div className="absolute right-0 top-15 mt-2 rounded-md bg-white/20 backdrop-blur-md p-2 shadow-lg">
                    <div className="flex flex-col gap-2">
                        {colors.map((color) => (
                            <div
                                key={color.value}
                                onClick={() => {
                                    setColor(color.value as Color);
                                    setIsOpen(false);
                                }}
                                className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors hover:bg-white/10"
                            >
                                <div
                                    className="h-4 w-4 rounded-full"
                                    style={{ backgroundColor: color.value }}
                                />
                                <span className="text-sm text-white">{color.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}