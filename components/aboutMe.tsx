import 'tailwindcss/tailwind.css'
import Image from "next/image"

function aboutMe() {
    return <div className='bg-dark_background h-screen'>
        <div className='flex-col flex min-h-screen'>
            <div className='flex-row flex h-screen'>
                <div className='basis-full md:basis-2/3 p-20'>
                    <h2 className='text-primary text-6xl font-dosis'>About me:</h2>
                    <p className='mt-5 font-dosis text-xl text-secondary max-w-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</p>
                </div>
                <div className='flex-col hidden md:flex basis-1/3 pr-20'>
                    <div className='basis-1/2 relative'>
                        <Image src="/images/about-me/29er.jpg" alt="Sailing Image" layout='fill' objectFit='contain' />
                    </div>
                    <div className='basis-1/2 relative'>
                        <Image src="/images/about-me/29er.jpg" alt="Sailing Image" layout='fill' objectFit='contain' />

                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default aboutMe;
