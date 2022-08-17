import 'tailwindcss/tailwind.css'
import Image from "next/image"
import Wave from 'react-wavify'

function LandingPage() {
    return <div className='h-screen bg-light_background'>
        <div className='h-5/6 relative'>
            <div className='flex flex-row flex-wrap h-full sm:p-20 p-10'>
                <div className='w-full md:basis-1/2 items-center justify-center relative'>
                    <div className='hidden md:block'>
                        <Image src="/images/programmingImage.webp" alt="software Engineer Illustration" layout='fill' objectFit='contain' quality={100} />
                    </div>
                    <div className='block md:hidden items-center justify-center' >
                        <Image src="/images/avatar.png" alt="Avatar" layout='fill' objectFit='contain' className='hidden md:block' />
                    </div>
                </div>
                <div className='sm:flex-1 md:basis-1/2 flex items-center'>
                    <div className='flex-col'>
                        <div className='flex flex-row items-center relative'>
                            <h1 className='text-primary text-8xl font-dosis basis-2/5'>Hello</h1>
                            <div className='hidden md:block'>
                                <Image src="/images/avatar.png" alt="Avatar" height="130px" width="130px" className='hidden md:block relative' />
                            </div>
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
