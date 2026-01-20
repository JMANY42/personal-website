import Navbar from '../components/Navbar.tsx'
import ProjectCard from '../components/projects/ProjectCard.tsx'
import Project from '../components/projects/Project.tsx'
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react"

function Projects() {
    const location = useLocation();
    const navigate = useNavigate();
    const projects = [
        {
            title: "Personal Website",
            description: "My personal website (this one right now). Includes a platform to showcase technical projects, live status information for deployed projects, and information about me.",
            tech: ["React","Teailwind"],
            github: "https://github.com/JMANY42/personal-website",
            demo: "https://davidjonathanlewis.com",
            status: "Development",
            path: 'personal-website',
        },{
            title: "Personal Server",
            description: "Converted my PC into an Ubuntu Server to host my website and other public and private applications. Connected to the internet via a cloudflared tunnel with WARP for ssh access for remote deployments.",
            tech: ["Cloudflare","Networking","Nginx",],
            status: "Launched",
            path: 'server',
        },{
            title: "Personal Website3",
            description: "description",
            tech: ["React","Teailwind"],
            github: "https://github.com/JMANY42/personal-website",
            status: "Development",
            path: 'personal-website3',
        }
    ]

    const pathEnding = location.pathname.substring(location.pathname.lastIndexOf('/')+1);

    useEffect(() => {
        if(pathEnding === 'projects') {
            navigate(projects[0].path);
        }
    })
    

    const selectedProjectIndex = projects.findIndex(project => project.path === pathEnding);

    return (
    <div className="bg-bg w-screen h-screen flex flex-col">
        <Navbar/>
        <div className="flex h-full overflow-hidden">
            <div className="p-8 text-main w-1/2 h-full overflow-y-auto">
                <h1 className="text-7xl text-left text-main font-thin pb-8 text-accent">Projects</h1>
                <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                    {projects.map((project, id) => (    // Map over options to create list items
                        <div onClick={() => console.log(project.title)}> {/* change URL parameters */}
                            <li 
                                key={id}
                                className="text-main text-2xl"> {/* List items styling */}
                                <ProjectCard {...project}/>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-1/2 bg-surface">
                <Project {...projects[selectedProjectIndex]}/>
            </div>
        </div>
    </div>
    )
}

export default Projects