import 'tailwindcss/tailwind.css'
import LandingPage from '../components/landingPage'
import AboutMe from '../components/aboutMe'
import Head from 'next/head'
import Projects from '../components/projects'

function Home() {

    return <div className='overflow-x-hidden'>
        <Head>
            <title>Emanuel Hiebeler</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="I am Emanue Hiebeler, a sailor and programmer. I'm especially interested in web and app development." />
        </Head>
        <LandingPage />
        <AboutMe />
        <Projects />
        <div className='h-screen bg-dark_background relative'>
            <h2 className='text-primary text-6xl font-dosis'>Contact Me:</h2>
        </div>
    </div>
}

export default Home
