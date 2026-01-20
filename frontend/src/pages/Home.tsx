import '/src/styles/Home.css'
import Navbar from '../components/Navbar.tsx'

function Home (){

    return (
    <div className="bg-bg w-screen h-screen flex flex-col">
        {/* NAVBAR */}
        <Navbar/>
        
        <div className="p-8 text-main space-y-10">
            <h1 className="text-7xl text-left font-thin text-accent">Hello</h1>
            <h2 className="text-3xl text-left">My name is Jonathan Lewis and this is my website</h2>
            <p className="text-xl text-muted space-y-4">
                My full name is David Jonathan Lewis, but I go by my middle name, Jonathan<br/>
                It is a work in progress but this is a start<br/>
                This webpage is being hosted on my personal server in my apartment accessed via a cloudflared tunnel (if you wanted to know)<br/>
                I plan on hosting my portfolio on here, some information about me, and updates to my current projects<br/>
                For now, you can check out my <a className="text-blue-300 underline" href="https://linkedin.com/in/david-jonathan-lewis">LinkedIn</a> and <a className="text-blue-300 underline" href="https://github.com/JMANY42">GitHub</a>
            </p>
            
            <p className="fixed bottom-0 text-bg">
                P.S. checkout dev.davidjonathanlewis.com and staging.davidjonathanlewis.com for the latest and (not so) greatest!
            </p>

        </div>
    </div>
    )
}

export default Home