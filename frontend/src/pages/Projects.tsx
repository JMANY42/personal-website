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

    // if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error: {error}</p>;
    

    const selectedProjectIndex = projects.findIndex(project => project.path === pathEnding);

    return (
    <div className="bg-bg w-full h-screen flex flex-col">
        <Navbar/>
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
            <div className="p-4 sm:p-6 lg:p-8 text-main w-full lg:w-1/2 overflow-y-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left text-main font-thin pb-6 sm:pb-8 text-accent animate-slideInLeftFirst">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-4 sm:gap-y-8">
                    { !loading && projects.map((project, id) => (    
                        <div onClick={() => console.log(project.title)} key={id}>
                            <li 
                                className="text-main text-xl sm:text-2xl">
                                <ProjectCard {...project}/>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden lg:block w-0.5 self-stretch bg-gray-700 animate-fadeIn"/>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-2 overflow-y-auto animate-slideInRight">
                {!loading && (<ProjectOverview {...projects[selectedProjectIndex]}/>)}
            </div>
        </div>
    </div>
    )
}

export default Projects