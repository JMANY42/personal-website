import type { Project } from './Project.tsx'
import { useNavigate } from "react-router-dom";
import StatusTag from '../StatusTag.tsx'

function ProjectCard ({ title, description, tech, github, demo, status, path }: Project ) {
    const navigate = useNavigate();

    //Navigate to URL when clicked
    return (
        <div className="rounded-2xl border border-neutral-800 bg-surface p-5 transition hover:-translate-y-1 hover:shadow-xl"
            onClick={() => {navigate('/projects/'+path)}}

        >
            <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-main">{title}</h3>
                <StatusTag status={status}/>
            </div>
            <p className="mt-2 text-sm text-muted overflow-hidden h-20">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tech.map(t => (
                <span key={t} className="rounded-full bg-brand px-3 py-1 text-xs">
                    {t}
                </span>
                ))}
            </div>

            <div className="mt-4 flex justify-between gap-4 text-sm items-center">
                <div className="space-x-4">
                    {github && <a href={github} className="text-blue-400 hover:underline">GitHub</a>}
                    {demo && <a href={demo} className="text-green-400 hover:underline">Demo</a>}
                </div>
                <p className="cursor-pointer text-white bg-accent p-2 rounded-full hover:bg-accent border border-neutral-800">Expand</p>
            </div>
        </div>

    )
}

export default ProjectCard