import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar.tsx";
import {Home} from "./components/Home.tsx";
import {About} from "./components/About.tsx";
import {Skills} from "./components/Skills.tsx";
import {Education} from "./components/Education.tsx";
import {Projects} from "./components/Projects.tsx";
import {Contact} from "./components/Contact.tsx";

function App() {
    return (
            <Router>
                <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 to-black">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </Router>
    )
}

export default App
