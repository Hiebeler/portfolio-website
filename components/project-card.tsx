import 'tailwindcss/tailwind.css'

function projectCard(props: any) {
    const title: String = props["title"];
    const color = props["color"];
    return <div className="w-full h-[70vh] px-10">
        <div className='bg-primary h-full'>
            {title}
        </div>
    </div>
}

export default projectCard;