import Navbar from '../components/Navbar.tsx'
import PictureCard from '../components/PictureCard.tsx'
import ACM from '/src/assets/ACM.jpg'
import Brother from '/src/assets/Brother.jpg'
import Cello from '/src/assets/Cello.jpg'
import Friends from '/src/assets/Friends.jpg'
import Galaxsea from '/src/assets/Galaxsea.jpg'
import Heartstrings from '/src/assets/Heartstrings.jpg'

//TODO: Make github repo just for current version of my resume. Use workflow to automatically download to server and serve on webpage.
function AboutMe() {
    return (
    <div className="bg-bg w-screen h-screen flex flex-col">
        {/* NAVBAR */}
        <Navbar/>

        <div className="flex overflow-hidden">
            <div className="p-8 text-main w-1/2">
                <h1 className="text-7xl text-left font-thin text-accent">About Me</h1>
                <h2 className="text-3xl font-bold pt-10">Who am I?</h2>
                    <p className="text-xl text-muted">My name is Jonathan Lewis. I am a second year CS student at UTD and a part of the National Merit Scholarship Program, UTD Computing Scholars (CS^2), and UTD CV Honors.</p>
                <h2 className="text-3xl font-bold pt-10">What am I passionate about?</h2>
                    <p className="text-xl text-muted">I have many interests including autonomous robotics, computer networking, and, in general, how technology interacts with the physical world. My favorite part about making this website was setting up and routing the server that it is hosted on.</p>
                <h2 className="text-3xl font-bold pt-10">Am I just a nerd?</h2>
                    <p className="text-xl text-muted">No! I have several differet hobbies outside of tech. I am a cellist in the UTD orchestra and love listening to and playing music. I also love spending time with my wonderful friends.</p>
                <h2 className="text-3xl font-bold pt-10">Why should you hire me?</h2>
                    <p className="text-xl text-muted">There's no good generalized answer to that question. However, if my resume {/* Make this a link */}doesn't convince you, please look through my projects to get a better understanding of my capabilities.</p>
            </div>
            {/* TODO: Store cards in backend and allow asynchronous loading.
                TODO: Change max height offset to dynamically get the navbar height if possible */}
            <div className="w-1/2 grid grid-cols-2 h-full overflow-y-auto">
                <PictureCard caption="My ACM Projects team after winning first place" img_path={ACM}/>
                <PictureCard caption="My cheerful brother" img_path={Brother}/>
                <PictureCard caption="UTD Galaxsea at the 2025 RoboBoat competition" img_path={Galaxsea}/>
                <PictureCard caption="Playing my cello" img_path={Cello}/>
                <PictureCard caption="Some friends" img_path={Friends}/>
                <PictureCard caption="UTD Heartstrings after performing at Prestonwood Court Senior Living Community" img_path={Heartstrings}/>
            </div>
        </div>
    </div>
    )
}

export default AboutMe