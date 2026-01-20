import { useEffect, useState } from "react"
import Navbar from '../components/Navbar.tsx'
import ProjectCard from '../components/projects/ProjectCard.tsx'
import ProjectOverview from '../components/projects/ProjectOverview.tsx'
import { useNavigate, useLocation } from "react-router-dom";
import  { fetchProjects } from '../api/projects.ts'
import type { Project } from '../types/project.ts'

function Projects() {
    const location = useLocation();
    const navigate = useNavigate();
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    //display first project if no project has been selected
    const pathEnding = location.pathname.substring(location.pathname.lastIndexOf('/')+1);
    useEffect(() => {
        if(projects[0] && pathEnding === 'projects') {
            navigate(projects[0].path);
        }
    })

    // Fetch projects
    useEffect(() => {
        let isMounted = true; // safe for cleanup
        setLoading(true);

        fetchProjects()
        .then((data) => {
            console.log("DATA ",data)
            if (isMounted) setProjects(data);
        })
        .catch((err) => {
            if (isMounted) setError(err.message);
        })
        .finally(() => {
            if (isMounted) setLoading(false);
        });


        return () => {
        isMounted = false; // cleanup in case component unmounts
        };

    }, []); // empty dependency → runs once on mount

    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;
    

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
                <ProjectOverview {...projects[selectedProjectIndex]}/>
            </div>
        </div>
    </div>
    )
}

export default Projects