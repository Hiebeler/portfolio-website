import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import LandingPage from '../components/landingPage'
import AboutMe from '../components/aboutMe'
import Head from 'next/head'
import Projects from '../components/projects'

function MyApp() {
  return <div className='overflow-x-hidden bg-light_background'>
    <Head>
      <title>Emanuel Hiebeler</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LandingPage />
    <AboutMe />
    <Projects />
    <div className='h-screen bg-dark_background relative mt-[200vh]'>
      <h2 className='text-primary text-6xl font-dosis'>Contact Me:</h2>
    </div>
  </div>
}

export default MyApp
