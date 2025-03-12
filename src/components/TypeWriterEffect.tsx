"use client"

import {useEffect, useState} from "react"

export const TypewriterEffect = ({words, className, cursorClassName,}: {
    words: {
        text: string
        className?: string
    }[]
    className?: string
    cursorClassName?: string
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [currentText, setCurrentText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const word = words[currentWordIndex].text

        const timeout = setTimeout(() => {
            // If deleting, remove a character
            if (isDeleting) {
                setCurrentText(word.substring(0, currentText.length - 1))
                setTypingSpeed(50) // Faster when deleting
            } else {
                // If typing, add a character
                setCurrentText(word.substring(0, currentText.length + 1))
                setTypingSpeed(150) // Normal typing speed
            }
        }, typingSpeed)

        // If we've completed typing the word
        if (!isDeleting && currentText === word) {
            // Wait a bit before starting to delete
            setTimeout(() => setIsDeleting(true), 1500)
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false)
            // Move to the next word
            setCurrentWordIndex((currentWordIndex + 1) % words.length)
            // Wait a bit before typing the next word
            setTypingSpeed(500)
        }

        return () => clearTimeout(timeout)
    }, [currentText, currentWordIndex, isDeleting, words, typingSpeed])

    return (
        <div className={`inline-flex items-center ${className}`}>
            {words.map((word, idx) => {
                if (idx === currentWordIndex) {
                    return (
                        <div key={idx} className="inline-block">
                            <span className={word.className}>{currentText}</span>
                        </div>
                    )
                }
                return null
            })}
            <span className={`ml-1 inline-block w-[2px] h-[1.2em] bg-primary animate-blink ${cursorClassName}`}/>
        </div>
    )
}