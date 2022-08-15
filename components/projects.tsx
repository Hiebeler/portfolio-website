import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css'
import ProjectCard from './project-card'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

function projects() {

    const panels = useRef<any>([]);
    const panelsContainer = useRef<any>();


    const createPanelsRefs = (panel: any, index: number) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;
        console.log("hallo");
        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);

    return <div className='h-[500vh] bg-light_background'>
        <div className='lg:pt-20 lg:pl-20 lg:pr-20 pt-10 pl-10 pr-10'>
            <div ref={panelsContainer} className='flex flex-nowrap h-[500vh] w-[500vw]'>
                <div ref={(e) => createPanelsRefs(e, 0)} className='w-[70vw]'>
                    <h2 className='text-primary text-6xl font-dosis'>Projects:</h2>
                    <div className='pt-[80px]'>
                        <ProjectCard title={"debt-manager"} />
                    </div>
                </div>
                <div ref={(e) => createPanelsRefs(e, 1)} className='w-[70vw] pt-[140px]'>
                    <ProjectCard title={"debt-manager"} />
                </div>
                <div ref={(e) => createPanelsRefs(e, 2)} className='w-[70vw] pt-[140px]'>
                    <ProjectCard title={"debt-manager"} />
                </div>
                <div ref={(e) => createPanelsRefs(e, 3)} className='w-[70vw] pt-[140px]'>
                    <ProjectCard title={"debt-manager"} />
                </div>
                <div ref={(e) => createPanelsRefs(e, 4)} className='w-[70vw] pt-[140px]'>
                    <ProjectCard title={"debt-manager"} />
                </div>
            </div>
        </div>
    </div>
}

export default projects;

function smoothScroll(arg0: string) {
    throw new Error('Function not implemented.');
}
