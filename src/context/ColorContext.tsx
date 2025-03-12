import type React from "react"
import { createContext, useState, useContext } from "react"

export type Color = "white" | "green" | "yellow" | "blue"

type ColorContextType = {
    color: Color
    setColor: (color: Color) => void
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [color, setColor] = useState<Color>("blue")

    return <ColorContext.Provider value={{ color, setColor }}>{children}</ColorContext.Provider>
}

export const useColor = () => {
    const context = useContext(ColorContext)
    if (context === undefined) {
        throw new Error("useColor must be used within a ColorProvider")
    }
    return context
}

