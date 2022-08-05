import 'tailwindcss/tailwind.css'
import Image from "next/image"
import Wave from 'react-wavify'

function LandingPage() {
    return <div className='h-screen bg-light_background'>
        <div className='h-5/6 relative'>
            <div className='flex flex-row flex-wrap h-full p-20'>
                <div className='sm:shrink w-full md:basis-1/2 items-center justify-center relative'>
                    <Image src="/images/landingPageImage.png" alt="software Engineer Illustration" layout='fill' objectFit='contain' />
                </div>
                <div className='sm:flex-1 md:basis-1/2 flex items-center'>
                    <div className='flex-col'>
                        <div className='flex flex-row items-center relative'>
                            <h1 className='text-primary text-8xl font-dosis basis-2/5'>Hello</h1>
                            <Image src="/images/avatar.png" alt="Avatar" height="150px" width="150px" />
                        </div>
                        <p className='font-dosis text-xl text-secondary max-w-xl'>I'm Emanuel Hiebeler, a programmer interested in mobile, web and backend development. </p>
                    </div>
                </div>
            </div>
        </div>
        <Wave className='h-2/4' fill='#222629'
            paused={false}
            options={{
                amplitude: 50,
                speed: 0.15,
                points: 5
            }}
        />
    </div>
}

export default LandingPage
