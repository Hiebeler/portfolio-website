import 'tailwindcss/tailwind.css'
import LandingPage from '../components/landingPage'
import AboutMe from '../components/aboutMe'
import Head from 'next/head'
import Projects from '../components/projects'
import ContactMe from '../components/contactMe'

function Home() {

    return <div className='overflow-x-hidden scrollbar scrollbar-thumb-green-900 scrollbar-track-gray-100'>
        <Head>
            <title>Emanuel Hiebeler</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="I am Emanue Hiebeler, a sailor and programmer. I'm especially interested in web and app development." />
        </Head>
        <LandingPage />
        <AboutMe />
        <Projects />
        <ContactMe />
    </div>
}

export default Home
