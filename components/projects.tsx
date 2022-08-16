import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css'
import ProjectCard from './project-card'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Projects() {

    const panels = useRef<any>([]);
    const panelsContainer = useRef<any>();


    const createPanelsRefs = (panel: any, index: number) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;
        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1) - 100,
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                //snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);

    return <div className='h-[210vw] flex flex-nowrap overflow-y-scroll overflow-x-hidden bg-light_background w-[210vw] relative' ref={panelsContainer}>
        <div className='lg:pt-20 lg:pl-20 lg:pr-20 pt-10 pl-10 pr-10'>
            <div className='flex flex-nowrap overflow-y-scroll overflow-x-hidden relative'>
                <div ref={(e) => createPanelsRefs(e, 0)} className='w-[70vw] 2xl:w-[50vw]'>
                    <h2 className='text-primary text-6xl font-dosis'>Projects:</h2>
                    <div className='pt-[80px]'>
                        <ProjectCard title={"Mind Yoga"} color="#33adcb" headerColor={"#FFDC7C"} folderName={"mind-yoga"} app={true} />
                    </div>
                </div>
                <div ref={(e) => createPanelsRefs(e, 1)} className='w-[70vw] 2xl:w-[50vw] pt-[140px]'>
                    <ProjectCard title={"debt-manager"} color={"#8879b8"} headerColor={"#8879b8"} folderName={"debt-manager"} app={true} />
                </div>
                <div ref={(e) => createPanelsRefs(e, 2)} className='w-[70vw] 2xl:w-[50vw] pt-[140px]'>
                    <ProjectCard title={"Ferienhaus Website"} color={"#cee002"} headerColor={"#cee002"} folderName={"ferienhaus"} app={false} />
                </div>
            </div>
        </div>
    </div>
}

export default Projects;