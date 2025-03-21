import {useColor} from "../context/ColorContext.tsx";
import EducationCard from "./EducationCard.tsx";
import {CertificationSlider} from "./CertificationSlider.tsx";
import {Footer} from "./Footer.tsx";

export function Education() {

    const {color} = useColor()

    const themeColor = {
        white: "#E2EAF4",
        green: "#4ade80",
        yellow: "#facc15",
        blue: "#60a5fa",
    }[color]

    const educationDetails = [
        {
            content: 'Completed O/L with excellent results at Kamburawala National Collage.',
            name: 'Kamburawala National Collage',
            imgSrc: '/images/Scl-Img.png',
            company: 'Secondary Education(2007-2017)'
        },
        {
            content: 'Completed A/L with excellent results at Kamburawala National Collage.',
            name: 'Kamburawala National Collage',
            imgSrc: '/images/Scl-Img.png',
            company: 'Secondary Education(2017-2020)'
        },
        {
            content: 'Currently pursuing a Diploma in Software Engineering at IJSE, gaining strong fundamentals and hands-on experience.',
            name: 'Institute of Java Software Engineering (IJSE)',
            imgSrc: '/images/IJSE-images.png',
            company: 'Higher Education (2023-2025)'
        }
    ];

    return (
        <section className="relative min-h-screen w-full overflow-hidden md:pl-30 md:pt-20 lg:px-30 lg:pl-40 ">
            <div
                className="container mx-auto px-4 pt-18 pb-6 md:py-16"
                style={{color: themeColor}}
                data-aos="fade-left"
                data-aos-delay="50"
            >
                {/*education details*/}
                <h1 className="mb-6 text-2xl font-bold md:text-5xl">Educational Journey</h1>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6">
                    {educationDetails.map(({content, name, imgSrc, company}, key) => (
                        <EducationCard key={key} content={content} name={name} imgSrc={imgSrc} company={company}
                                       classes='reveal-up' themeColor={themeColor}/>
                    ))}
                </div>
                {/*certifications img view*/}
                <h1 className="text-4xl font-bold mb-8 text-center pt-10">My Certifications</h1>
                <CertificationSlider/>
                <Footer/>
            </div>
        </section>
    );
}