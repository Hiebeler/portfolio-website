import 'tailwindcss/tailwind.css'
import Image from "next/image"

function aboutMe() {
    return <div className='bg-dark_background min-h-screen'>
        <div className='flex-col flex h-screen'>
            <div className='flex-row flex basis-2/3 lg:pr-20 lg:pl-20 pr-10 pl-10 xl:gap-x-80 gap-x-40'>
                <div className='flex-col flex lg:basis-2/3 basis-full'>
                    <div className='basis-2/3 lg:basis-2/3 pt-20 pb-20'>
                        <h2 className='text-primary text-6xl font-dosis'>About me:</h2>
                        <p className='mt-5 font-dosis text-xl text-secondary max-w-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</p>
                    </div>

                </div>

                <div className='flex-row hidden lg:flex basis-1/3 justify-end'>
                    <div className='basis-full relative rotate-[5deg] max-w-2xl'>
                        <Image src="/images/about-me/eurosafEm.webp" alt="Sailing Image" layout='fill' objectFit='contain' />
                    </div>
                </div>
            </div>
            <div className='flex-row hidden lg:flex pl-20 pb-20 pr-20 basis-2/3 lg:justify-between xl:gap-x-40 gap-x-20'>
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
        </div>
    </div>
}

export default aboutMe;
