import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import LandingPage from '../components/landingPage'
import AboutMe from '../components/aboutMe'
import Head from 'next/head'
import Projects from '../components/projects'

function MyApp() {
  return <div>
    <Head>
      <title>Emanuel Hiebeler</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LandingPage />
    <AboutMe />
    <Projects />
  </div>
}

export default MyApp
