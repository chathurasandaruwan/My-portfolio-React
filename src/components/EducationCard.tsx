interface Props {
    content: string;
    name: string;
    imgSrc: string;
    company: string;
    classes?: string;
    themeColor: string;
}

const EducationCard = ({ content, name, imgSrc, company, classes,themeColor }: Props) => {
    return (
        <div className={' p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] text-center sm:text-left ' + classes} style={{
            backgroundColor: `${themeColor}6A`,
        }}>
            <p className="text-zinc-400 mb-4">{content}</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-auto">
                <figure className="img-box rounded-lg">
                    <img src={imgSrc} alt={name} className="img-cover" width={44} height={44} loading="lazy" />
                </figure>
                <div>
                    <p className="font-semibold text-white">{name}</p>
                    <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;