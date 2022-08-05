import 'tailwindcss/tailwind.css'
import Image from "next/image"

function LandingPage() {
    return <div className='h-screen bg-light_background'>
        <div className='flex flex-row flex-wrap h-full'>
            <div className='sm:shrink w-full md:basis-1/2 items-center justify-center relative'>
                <Image src="/images/landingPageImage.png" alt="software Engineer Illustration" layout='fill' objectFit='contain' />

            </div>
            <div className='sm:flex-1 md:basis-1/2 flex items-center'>
                <div className='flex-col'>
                    <div className='flex-row'>
                        <h1 className='text-primary text-8xl font-dosis basis-1/2'>Hallo</h1>
                        <Image src="/images/avatar.png" alt="Avatar" height="150px" width="150px" />
                    </div>
                    <p className='font-dosis text-xl text-secondary'>I'm Emanuel Hiebeler, a programmer interested in mobile, web and backend development. </p>
                </div>
            </div>
        </div>
    </div>
}

export default LandingPage
