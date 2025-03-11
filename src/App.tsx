import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/NavBar.tsx";
import {Home} from "./components/Home.tsx";
import {About} from "./components/About.tsx";

function App() {
    return (
            <Router>
                <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 to-black">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
    )
}

export default App
