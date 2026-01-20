import Markdown from 'react-markdown'
import StatusTag from '../StatusTag.tsx'
import type { Project } from '../../types/project.ts'

function ProjectOverview ({ title, tech, github, demo, status, content }: Project) {

    return (
        <div className="bg-surface p-5 h-full overflow-y-scroll">
            <div className="flex gap-5 items-center">
                <h2 className="text-5xl font-bold text-main">{title}</h2>
                <div className="flex gap-3 items-center">
                    <StatusTag status={status}/>
                    <div className="w-px self-stretch bg-white"/>
                    {tech && <div className="flex flex-wrap gap-3 items-center">
                        {tech.map(t => (
                        <span key={t} className="rounded-full bg-brand px-3 py-1 text-sm text-main">
                            {t}
                        </span>
                        ))}
                    </div>}
                </div>
            </div>
            <hr className="prose max-w-none my-8"/>
            { (github || demo) && <div>
                <div className="flex gap-4 text-sm items-center">
                    <h3 className="text-main text-2xl font-bold">Links</h3>
                    <div className="w-px self-stretch bg-white"/>

                    <div className="flex flex-col gap-1 text-lg">
                        {github && <a href={github} className="text-blue-400 hover:underline">GitHub</a>}
                        {demo && <a href={demo} className="text-accent hover:underline">Demo</a>}
                    </div>
                </div> 
                <hr className="prose max-w-none my-8"/>
            </div>}

            <div className="text-white prose prose-invert max-w-none prose-p:text-(--text-secondary) prose-p:text-lg prose-ul:text-(--text-secondary)">
                <Markdown>{content}</Markdown>
            </div>
        </div>

    )
}

export default ProjectOverview