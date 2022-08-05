import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import LandingPage from '../components/landingPage'
import AboutMe from '../components/aboutMe'
import Head from 'next/head'

function MyApp() {
  return <div>
    <Head>
      <title>Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <LandingPage />
    <AboutMe />
  </div>
}

export default MyApp
