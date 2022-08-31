import 'tailwindcss/tailwind.css'
import Image from "next/image"

function ProjectCard(props: any) {
    const title: String = props["title"];
    const color: String = props["color"];
    const headerColor: String = props["headerColor"];
    const app: boolean = props["app"];
    const folderName = props["folderName"];
    const explanation: string = props["text"];
    const technologies: string[] = props["technologies"];
    const link: string = props["link"];

    return <div className="w-full h-[70vh] px-5 sm:px-10">
        <div className={"h-full p-10 rounded shadow-xl"} style={{ backgroundColor: `${color + "55"}` }}>
            <div className='flex flex-row h-full'>
                <div className='basis-full sm:basis-2/3 lg:basis-1/2 flex flex-col xl:px-10'>
                    <div className='relative min-h-[100px] h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]'>
                        <a target="_blank" rel="noreferrer" href={link}>
                            <Image src={"/images/projects/" + folderName + "/logo.png"} alt="" layout='fill' objectFit='contain' />
                        </a>

                    </div>
                    <h3 className='text-4xl 2xl:text-6xl font-dosis font-bold' style={{ color: `${headerColor}` }}>{title}</h3>
                    <p className='text-xl lg:text-2xl text-secondary font-dosis pt-5'>{explanation}
                    </p>
                    <h4 className='text-4xl 2xl:text-4xl font-dosis font-bold pt-10' style={{ color: `${headerColor}` }}>
                        Technology:
                    </h4>
                    <div className='flex-row'>
                        {technologies.map(function (technology: string, index: number) {
                            var technologyLink: string = "";
                            switch (technology) {
                                case "flutter":
                                    technologyLink = "https://flutter.dev/";
                                    break;
                                case "firebase":
                                    technologyLink = "https://firebase.google.com/";
                                    break;
                                case "sass":
                                    technologyLink = "https://sass-lang.com/";
                                    break;
                                default:
                                    return (<Image key={index.toString()} src={"/icons/technologies/" + technology + ".svg"} alt="" width="60px" height="60px" objectFit='contain' className='object-left' />);
                            }
                            return (<a target="_blank" rel="noreferrer" href={technologyLink} key={index.toString()}><Image src={"/icons/technologies/" + technology + ".svg"} alt="" width="60px" height="60px" objectFit='contain' className='object-left' /></a>)
                        })}


                    </div>
                </div>
                {(() => {
                    if (app) {
                        return <>
                            <div className='hidden sm:flex basis-1/3 lg:basis-1/2 flex-row gap-x-5'>
                                <div className='basis-full lg:basis-1/2 flex flex-col relative gap-y-5'>
                                    <div className='basis-1/2 relative'>
                                        <Image src={"/images/projects/" + folderName + "/1.webp"} alt="picture of game" layout='fill' objectFit='contain' />
                                    </div><div className='basis-1/2 relative'>
                                        <Image src={"/images/projects/" + folderName + "/2.webp"} alt="picture of game" layout='fill' objectFit='contain' />
                                    </div>

                                </div>
                                <div className='hidden lg:flex basis-1/2 flex-col relative gap-y-5'>
                                    <div className='basis-1/2 relative'>
                                        <Image src={"/images/projects/" + folderName + "/3.webp"} alt="picture of game" layout='fill' objectFit='contain' />
                                    </div>
                                    <div className='basis-1/2 relative'>
                                        <Image src={"/images/projects/" + folderName + "/4.webp"} alt="picture of game" layout='fill' objectFit='contain' />
                                    </div>
                                </div>
                            </div></>
                    }
                    return <><div className='hidden sm:flex basis-1/3 lg:basis-1/2 relative flex-col gap-y-5'>
                        <div className='basis-1/2 relative'>
                            <Image src={"/images/projects/" + folderName + "/1.png"} alt="picture of game" layout='fill' objectFit='contain' />
                        </div>
                        <div className='basis-1/2 relative'>
                            <Image src={"/images/projects/" + folderName + "/2.png"} alt="picture of game" layout='fill' objectFit='contain' />
                        </div>
                    </div></>;
                })()}
            </div>
        </div>
    </div>
}

const tryRequire = (path: any) => {
    try {
        require(`${path}`);
        return true;
    } catch (err) {
        return false;
    }
};

export default ProjectCard;