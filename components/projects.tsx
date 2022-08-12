import 'tailwindcss/tailwind.css'
import ProjectCard from './project-card'

function projects() {
    return <div className='h-screen bg-light_background'>
        <div className='lg:pt-20 lg:pl-20 lg:pr-20 pt-10 pl-10 pr-10'>
            <h2 className='text-primary text-6xl font-dosis'>Projects:</h2>
            <ProjectCard />
        </div>
    </div>
}

export default projects;