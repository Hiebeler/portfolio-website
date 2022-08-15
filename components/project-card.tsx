import 'tailwindcss/tailwind.css'
import Image from "next/image"

function ProjectCard(props: any) {
    const title: String = props["title"];
    const color = props["color"];
    const imageName = props["imageName"];
    console.log(color);
    return <div className="w-full h-[70vh] px-10">
        <div className={"bg-[" + color + "] bg-opacity-50 h-full p-10 rounded shadow-xl"}>
            <div className='flex flex-row'>
                <div className='basis-1/3 flex flex-col items-center px-10'>
                    <div className='basis-full relative'>
                        <Image src={"/images/projects/" + imageName} alt="logo" height="200px" width="200px" objectFit='contain' />
                    </div>
                    <h3 className='text-[#FFDC7C] text-6xl font-dosis font-bold'>{title}</h3>
                    <p className='text-2xl text-secondary font-dosis pt-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                    </p>
                </div>
                <div className='basis-2/3 bg-light_background'>

                </div>
            </div>
        </div>
    </div>
}

export default ProjectCard;