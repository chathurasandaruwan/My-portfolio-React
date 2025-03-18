import {useColor} from "../context/ColorContext.tsx";
import {ArrowRight, Github, Linkedin, Mail, MapPin, Phone} from "lucide-react";

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
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 ">
                                <Mail className="w-6 h-6"/>
                                <span className="hover:text-white transition-colors">
                                    chathurasandaruwan122@gmail.com
                                </span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Phone className="w-6 h-6"/>
                                <span className="hover:text-white transition-colors">
                                    + (94) 776-826-398
                                </span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <MapPin className="w-6 h-6"/>
                                <span className="hover:text-white transition-colors">
                                    Yatadolawaththa, Mathugama, Sri Lanka
                                </span>
                            </div>

                            <div className="flex space-x-4 pt-4">
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="w-6 h-6 hover:cursor-pointer hover:scale-110"/>
                                </a>
                                <a
                                    href="https://github.com/chathurasandaruwan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="w-6 h-6 hover:cursor-pointer hover:scale-110"/>
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 bg-white/10 border  rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50"
                                style={{borderColor: `${themeColor}6A`}}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 bg-white/10 border rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50"
                                style={{borderColor: `${themeColor}6A`}}
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="w-full px-4 py-2 bg-white/10 border rounded-lg focus:outline-none focus:border-white/40 text-white placeholder-white/50 resize-none"
                                style={{borderColor: `${themeColor}6A`}}
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-white/10 group/btn hover:bg-white/30 border inline-flex items-center font-semibold py-2 px-4 justify-center hover:cursor-pointer rounded-lg transition-all duration-200 backdrop-blur-sm"
                                style={{borderColor: themeColor}}
                            >
                                Send Message
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}