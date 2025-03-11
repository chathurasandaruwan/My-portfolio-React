import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar.tsx";
import {Home} from "./components/Home.tsx";
import {About} from "./components/About.tsx";
import {Skills} from "./components/Skills.tsx";
import {Education} from "./components/Education.tsx";
import {Projects} from "./components/Projects.tsx";
import {Contact} from "./components/Contact.tsx";
import {ColorSelector} from "./components/ColorSelector.tsx";

function App() {
    return (
            <Router>
                <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 to-black">
                    <ColorSelector/>
                    <Navbar/>
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="stars-container">
                                {Array.from({length: 50}).map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute h-1 w-1 rounded-full bg-white/30 hover:translate-x-10 transition-ease-in-out duration-500"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            opacity: Math.random() * 0.8 + 0.2,
                                        }}
                                    />
                                ))}
                                {Array.from({length: 10}).map((_, i) => (
                                    <div
                                        key={`line-${i}`}
                                        className="absolute h-px bg-white/10 hover:transform hover:scale-150 transition-ease-in-out duration-500"
                                        style={{
                                            top: `${Math.random() * 100}%`,
                                            left: `${Math.random() * 100}%`,
                                            width: `${Math.random() * 100 + 50}px`,
                                            transform: `rotate(${Math.random() * 360}deg)`,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/skills" element={<Skills/>}/>
                            <Route path="/education" element={<Education/>}/>
                            <Route path="/projects" element={<Projects/>}/>
                            <Route path="/contact" element={<Contact/>}/>
                        </Routes>
                </div>
            </Router>
)
}

export default App
