import React, { useEffect, useRef, useState } from 'react';
import { XIcon as Icon } from 'lucide-react';

interface SkillCardProps {
    name: string;
    icon:  typeof Icon;
    level: number;
    style: React.CSSProperties;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon: IconComponent, level ,style}) => {
    const [isVisible, setIsVisible] = useState(false);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);

    return (
        <div className="bg-white p-6 rounded-xl  transition-shadow">
            <div className="flex items-center gap-4">
                <IconComponent className="w-8 h-8 text-indigo-600" style={style}/>
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
                    <div ref={progressRef} className="mt-2 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                                width: isVisible ? `${level}%` : '0%',
                                transitionDelay: '100ms'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard