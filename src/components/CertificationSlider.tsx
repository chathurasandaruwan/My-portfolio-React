import React, {useState, useEffect} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';

interface Certification {
    id: number;
    title: string;
    image: string;
    issuer: string;
    date: string;
}

const certifications: Certification[] = [
    {
        id: 1,
        title: "Innovesta '23",
        image: "src/assets/images/certification1.jpg",
        issuer: "IJSE Innovesta",
        date: "2023"
    },
    {
        id: 2,
        title: "First place in term test",
        image: "src/assets/images/certification2.jpg",
        issuer: "Kamburawala College",
        date: "2017"
    },
    {
        id: 3,
        title: "Second place in term test",
        image: "src/assets/images/certification3.jpg",
        issuer: "Kamburawala College",
        date: "2017"
    },
    {
        id: 4,
        title: "Second place in term test",
        image: "src/assets/images/certification4.jpg",
        issuer: "Kamburawala College",
        date: "2017"
    },
    {
        id: 5,
        title: "Prefect in School",
        image: "src/assets/images/certification5.jpg",
        issuer: "Kamburawala College",
        date: "2019-2020"
    }
];

export const CertificationSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev + 1) % certifications.length);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 py-8"
             data-aos="fade-up-left"
             data-aos-delay="50">
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl shadow-2xl">
                {/* Main Image */}
                <div className="absolute w-full h-full">
                    <img
                        src={certifications[currentIndex].image}
                        alt={certifications[currentIndex].title}
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay with certification details */}
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{certifications[currentIndex].title}</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-sm opacity-90">{certifications[currentIndex].issuer}</p>
                            <p className="text-sm opacity-90">{certifications[currentIndex].date}</p>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 hover:cursor-pointer -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full hover:scale-110"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 text-white"/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hover:cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full hover:scale-110"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 text-white"/>
                </button>

                {/* Dots Navigation */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                    {certifications.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};