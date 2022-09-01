import 'tailwindcss/tailwind.css'
import Image from "next/image"
import { useState } from 'react';

function AboutMe() {
    var [useInstaHover, setInstaHover] = useState("#222629");
    var [useMailColor, setMailColor] = useState("#222629")

    function handleMailEnter() {
        setMailColor("#ed4f41");
    }

    function handleMailLeave() {
        setMailColor("#222629");
    }

    function handleInstaEnter() {
        setInstaHover("url(#radial-gradient)");
    }

    function handleInstaLeave() {
        setInstaHover("#222629");
    }



    return <div className='bg-dark_background min-h-screen relative flex-col flex'>
        <div className='flex-row flex basis-2/3 lg:pr-20 lg:pl-20 pr-10 pl-10 xl:gap-x-80 gap-x-40'>
            <div className='flex-col flex lg:basis-2/3 basis-full'>
                <div className='basis-2/3 lg:basis-2/3 pt-20 pb-20'>
                    <h2 className='text-primary text-6xl font-dosis'>About me:</h2>
                    <p className='mt-5 font-dosis text-xl text-secondary max-w-5xl'>Hallo, I'm Emanuel Hiebeler and i am 17 years old and from Austria. I am interested in Programming, espessially in web and app development.</p>
                    <h4 className='text-primary text-4xl font-dosis pt-16'>Follow Me:</h4>
                    <div className='pt-2 flex-row flex gap-x-5'>
                        <a target="_blank" href="https://github.com/Hiebeler" rel="noreferrer">
                            <Image src="/icons/github.svg" alt="Github" width={"50px"} height="50px" objectFit='contain' />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/hiebeler05/" rel="noreferrer" onMouseEnter={handleInstaEnter} onMouseLeave={handleInstaLeave}>
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.5 51.5" className='h-[50px] w-[50px]'><defs><radialGradient id="radial-gradient" cx="18.41" cy="14.88" r="43.44" gradientTransform="matrix(1, 0, 0, -1, 0, 62)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffb140" /><stop offset="0.26" stopColor="#ff5445" /><stop offset="0.6" stopColor="#fc2b82" /><stop offset="1" stopColor="#8e40b7" /></radialGradient></defs><circle style={{ fill: "#6b6E70" }} cx="25.75" cy="25.75" r="25.75" /><g id="_7_stroke" data-name="7 stroke"><g id="Instagram"><path style={{ fill: useInstaHover, transition: "1s" }} id="Instagram-2" data-name="Instagram" d="M41.45,20.93a2,2,0,1,1-2-2A2,2,0,0,1,41.45,20.93ZM30.33,35.67A5.67,5.67,0,1,1,36,30,5.66,5.66,0,0,1,30.33,35.67Zm0-14.4A8.73,8.73,0,1,0,39.06,30,8.73,8.73,0,0,0,30.33,21.27Zm0-5.21c4.54,0,5.08,0,6.87.1a9.32,9.32,0,0,1,3.16.59A5.69,5.69,0,0,1,43.59,20a9.39,9.39,0,0,1,.58,3.16c.08,1.79.1,2.33.1,6.87s0,5.08-.1,6.87A9.39,9.39,0,0,1,43.59,40a5.69,5.69,0,0,1-3.23,3.22,9.32,9.32,0,0,1-3.16.59c-1.79.08-2.33.1-6.87.1s-5.07,0-6.87-.1a9.3,9.3,0,0,1-3.15-.59,5.23,5.23,0,0,1-2-1.27A5.32,5.32,0,0,1,17.08,40a9.39,9.39,0,0,1-.58-3.16c-.09-1.79-.1-2.33-.1-6.87s0-5.08.1-6.87A9.39,9.39,0,0,1,17.08,20,5.32,5.32,0,0,1,18.35,18a5.23,5.23,0,0,1,2-1.27,9.56,9.56,0,0,1,3.15-.59C25.26,16.08,25.79,16.06,30.33,16.06Zm0-3.06c-4.61,0-5.19,0-7,.1a12.37,12.37,0,0,0-4.12.79,8.41,8.41,0,0,0-3,2,8.31,8.31,0,0,0-2,3A12.49,12.49,0,0,0,13.44,23c-.09,1.81-.11,2.39-.11,7s0,5.2.11,7a12.49,12.49,0,0,0,.79,4.13,8.31,8.31,0,0,0,2,3,8.41,8.41,0,0,0,3,2,12.37,12.37,0,0,0,4.12.79c1.82.08,2.4.1,7,.1s5.2,0,7-.1a12.43,12.43,0,0,0,4.13-.79,8.49,8.49,0,0,0,3-2,8.31,8.31,0,0,0,2-3A12.49,12.49,0,0,0,47.23,37c.08-1.81.1-2.39.1-7s0-5.2-.1-7a12.49,12.49,0,0,0-.79-4.13,8.31,8.31,0,0,0-2-3,8.49,8.49,0,0,0-3-2,12.43,12.43,0,0,0-4.13-.79C35.53,13,35,13,30.33,13Z" transform="translate(-4.44 -4.44)" /></g></g></svg></a>
                        <button onClick={
                            sendMail
                        } onMouseEnter={handleMailEnter} onMouseLeave={handleMailLeave}>
                            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" className='h-[50px] w-[50px]' ><defs></defs><path style={{ fill: "#6b6E70" }} d="M30,4A26,26,0,1,0,56,30,26,26,0,0,0,30,4Z" transform="translate(-4 -4)" /><path style={{ fill: useMailColor.toString(), transition: "1s" }} d="M11.28,19.85A4.67,4.67,0,0,1,16,15.17H44a4.68,4.68,0,0,1,4.68,4.68V38.57A4.69,4.69,0,0,1,44,43.25H16a4.68,4.68,0,0,1-4.68-4.68Zm3.51,0v1.61L27.4,31.82a4.1,4.1,0,0,0,5.2,0L45.21,21.46V19.78A1.21,1.21,0,0,0,44,18.61H16a1.21,1.21,0,0,0-1.17,1.17Zm0,6.16V38.57A1.17,1.17,0,0,0,16,39.74H44a1.17,1.17,0,0,0,1.17-1.17V26L34.83,34.53a7.68,7.68,0,0,1-9.72,0Z" transform="translate(-4 -4)" /></svg>
                        </button>



                    </div>
                </div>

            </div>

            <div className='flex-row hidden lg:flex basis-1/3 justify-end'>
                <div className='basis-full relative rotate-[5deg] max-w-2xl'>
                    <Image src="/images/about-me/eurosafEm.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
                </div>
            </div>
        </div>
        <div className='flex-row hidden lg:flex pl-20 pb-20 pr-20 basis-2/3 lg:justify-between xl:gap-x-40 gap-x-20 min-h-[66vh]'>
            <div className='basis-1/2 relative rotate-[-2deg] max-w-2xl'>
                <Image src="/images/about-me/29er.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
            <div className='basis-1/2 relative rotate-[4deg]  max-w-2xl'>
                <Image src="/images/about-me/skeeta.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
            <div className='basis-1/2 relative rotate-[-3deg] max-w-2xl'>
                <Image src="/images/about-me/biking.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
        </div>
        <div className='flex-row flex-wrap lg:hidden flex pl-20 pb-20 pr-20 basis-2/3 gap-y-10'>
            <div className='basis-1/2 relative rotate-[-1deg] max-w-2xl'>
                <Image src="/images/about-me/29er.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
            <div className='basis-1/2 relative rotate-[5deg]  max-w-2xl'>
                <Image src="/images/about-me/skeeta.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
            <div className='basis-1/2 relative rotate-[4deg] max-w-2xl'>
                <Image src="/images/about-me/biking.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
            <div className='basis-1/2 relative rotate-[-2deg] max-w-2xl'>
                <Image src="/images/about-me/29er.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
            </div>
        </div>

    </div >

    function sendMail() {
        var link = "mailto:emanuel.hiebeler@gmail.com";

        window.location.href = link;
    }
}



export default AboutMe;
