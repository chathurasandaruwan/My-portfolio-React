import {Github, Linkedin, Youtube} from "lucide-react";

export function Footer() {
    return (
        <footer className=" pt-4 border-t border-white/20 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">&copy; {new Date().getFullYear()} Chathura Sandaruwan. All rights
                            reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a
                            href="https://github.com/chathurasandaruwan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 hover:cursor-pointer hover:scale-110"
                        >
                            <Github className="w-6 h-6"/>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 hover:cursor-pointer hover:scale-110"
                        >
                            <Linkedin className="w-6 h-6"/>
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-6 h-6 hover:cursor-pointer hover:scale-110"
                        >
                            <Youtube className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}