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

    return <div className='h-[270vw] lg:h-[210vw] 2xl:h-[150vw] flex flex-nowrap overflow-y-hidden overflow-x-hidden bg-light_background'>
        <div className=''>
            <div ref={panelsContainer} className='flex flex-nowrap h-[270vw] lg:h-[210vw] 2xl:h-[150vw] w-[270vw] lg:w-[210vw] 2xl:w-[150vw] relative p-20'>
                <div ref={(e) => createPanelsRefs(e, 0)} className='w-[90vw] lg:w-[70vw] 2xl:w-[50vw]'>
                    <h2 className='text-primary text-6xl font-dosis'>Projects:</h2>
                    <div className='pt-[80px]'>
                        <ProjectCard title={"Mind Yoga"} color="#33adcb" headerColor={"#FFDC7C"} folderName={"mind-yoga"} app={true} technologies={["flutter"]} text="Mind Yoga is a quiz app where you can challenge your friends to a quiz or go on a highscore hunt and try to get the best highscore in the world. Here I programmed the hole frontend with one college." />
                    </div>
                </div>
                <div ref={(e) => createPanelsRefs(e, 1)} className='w-[90vw] lg:w-[70vw] 2xl:w-[50vw] pt-[140px]'>
                    <ProjectCard title={"debt-manager"} color={"#8879b8"} headerColor={"#8879b8"} folderName={"debt-manager"} app={true} technologies={["flutter", "firebase"]} text="Debt-Manager is an simple manager for your debts, but it gives you also some special features like adding debts which your friends also see." />
                </div>
                <div ref={(e) => createPanelsRefs(e, 2)} className='w-[90vw] lg:w-[70vw] 2xl:w-[50vw] pt-[140px]'>
                    <a target="_blank" href="https://ferienhaus-lustenau.at">
                        <ProjectCard title={"Ferienhaus Website"} color={"#cee002"} headerColor={"#cee002"} folderName={"ferienhaus"} app={false} technologies={["html", "js", "sass"]} text="I developed a simple website for our holiday house where you can get all the information for it." /></a>
                </div>
            </div>
        </div>
    </div>
}

export default Projects;