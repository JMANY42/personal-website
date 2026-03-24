import Navbar from '../components/Navbar.tsx'
import PictureCard from '../components/PictureCard.tsx'
import ACM from '/src/assets/ACM.jpg'
import Brother from '/src/assets/Brother.jpg'
import Cello from '/src/assets/Cello.jpg'
import Friends from '/src/assets/Friends.jpg'
import Galaxsea from '/src/assets/Galaxsea.jpg'
import Heartstrings from '/src/assets/Heartstrings.jpg'
import ResumeLink from '../components/ResumeLink.tsx'

function AboutMe() {
    return (
    <div className="bg-bg w-full lg:h-screen flex flex-col">
        <Navbar/>

        <div className="flex flex-col lg:flex-row flex-1 lg:overflow-hidden page-padding">
            <div className="p-4 sm:p-6 lg:p-8 text-main w-full lg:w-1/2 lg:overflow-y-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-left font-thin text-accent animate-fadeInFirst">About Me</h1>
                <div className="animate-slideInLeft">
                    <h2 className="text-2xl sm:text-3xl font-bold pt-6 sm:pt-10">Who am I?</h2>
                        <p className="text-lg sm:text-xl text-muted">My name is Jonathan Lewis. I am a second year CS student at UTD and a part of the National Merit Scholarship Program, UTD Computing Scholars (CS^2), and UTD CV Honors.</p>
                    <h2 className="text-2xl sm:text-3xl font-bold pt-6 sm:pt-10">What am I passionate about?</h2>
                        <p className="text-lg sm:text-xl text-muted">I have many interests including autonomous robotics, computer networking, and, in general, how technology interacts with the physical world. My favorite part about making this website was setting up and routing the server that it is hosted on, not working on the frontend design (yuck).</p>
                    <h2 className="text-2xl sm:text-3xl font-bold pt-6 sm:pt-10">Am I just a nerd?</h2>
                        <p className="text-lg sm:text-xl text-muted">No! I have several differet hobbies outside of tech. I am a cellist in the UTD orchestra and love listening to and playing music. I also love playing and watching football. Go Cowboys!</p>
                    <h2 className="text-2xl sm:text-3xl font-bold pt-6 sm:pt-10">Why should you hire me?</h2>
                        <p className="text-lg sm:text-xl text-muted pb-6 lg:pb-0">I have technical ability and am confident I can work well with anyone. However, if my <ResumeLink svg={false}/> doesn't convince you, please look through my projects to get a better understanding of my capabilities.</p>
                </div>
            </div>
            <h2 className="lg:hidden text-3xl sm:text-4xl font-bold pt-6 sm:pt-10 px-4 text-main text-center">Some Pictures</h2>
            <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-4 px-1 py-0.5 lg:p-4 lg:overflow-y-auto animate-slideInRight">
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