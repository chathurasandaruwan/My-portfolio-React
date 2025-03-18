import React, {useEffect, useRef, useState} from 'react';
import {XIcon as Icon} from 'lucide-react';

interface SkillCardProps {
    name: string;
    icon: typeof Icon;
    level: number;
    style: string;
    themeColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({name, icon: IconComponent, level, style, themeColor}) => {
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
        <div className="p-6 rounded-xl"
             style={{
                 backgroundColor: `${themeColor}6A`, // 60% opacity in HEX (1A = 10%)
             }}
             data-aos="fade-up-left"
             data-aos-delay="50">
            <div className=" group flex items-center gap-4">
                <div
                    className={`${style} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                    <IconComponent/>
                </div>
                <div className="flex-1">
                    <h3 className="font-semibold text-lg text-black">{name}</h3>
                    <div ref={progressRef} className="mt-2 bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                                // backgroundColor: `${themeColor}`,
                                width: isVisible ? `${level}%` : '0%',
                                transitionDelay: '100ms'
                            }}
                        />
                        <div className="text-sm text-right text-muted-foreground text-black">{level}%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillCard