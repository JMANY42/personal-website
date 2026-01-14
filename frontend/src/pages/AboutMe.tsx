import Navbar from '../components/Navbar.tsx'
import Card from '../components/Card.tsx'
import imgUrl from '/src/assets/test_img.jpg'

//TODO: Make github repo just for current version of my resume. Use workflow to automatically download to server and serve on webpage.
function AboutMe() {
    return (
    <div className="bg-[#0A6105] w-screen h-screen flex flex-col">
        {/* NAVBAR */}
        <Navbar/>

        <div className="flex">
            <div className="p-8 text-white w-1/2">
                <h1 className="text-7xl text-left font-thin">About Me</h1>
                <h2 className="text-3xl font-bold pt-10">Who am I?</h2>
                    <p className="text-xl">My name is Jonathan, but you might also know me as David if you are a currently reviewing a job application I submitted. I am a second year CS student at UTD.</p>
                <h2 className="text-3xl font-bold pt-10">What am I passionate about?</h2>
                    <p className="text-xl">I have many interests including autonomous robotics, computer networking, and, in general, how technology interacts with the physical world. My favorite part about making this website was setting up and routing the server that it is hosted on.</p>
                    <p className="text-xl pt-3">As you might be able to tell, I'm not very interested in UI design. I can promise that this site will look better in the future, but I wanted to get information up as quickly as possible.</p>
                <h2 className="text-3xl font-bold pt-10">Am I just a nerd?</h2>
                    <p className="text-xl">No! I have several differet hobbies outside of tech. I am a cellist in the UTD orchestra and love listening to and playing music. I also love spending time with my wonderful friends.</p>
                <h2 className="text-3xl font-bold pt-10">Why should you hire me?</h2>
                    <p className="text-xl">There's no good generalized answer to that question. However, if my resume {/* Make this a link */}doesn't convince you, please look through my projects to get a better understanding of my capabilities.</p>
            </div>
            {/* TODO: Store cards in backend and allow asynchronous loading.
                TODO: Change max height offset to dynamically get the navbar height if possible */}
            <div className="w-1/2 grid grid-cols-2 max-h-[calc(100vh-64px)] overflow-y-scroll">
                <Card caption="This is my lovely cat, Paws" img_path={imgUrl}/>
                <Card caption="This is my lovely cat, Paws" img_path={imgUrl}/>
                <Card caption="This is my lovely cat, Paws" img_path={imgUrl}/>
                <Card caption="This is my lovely cat, Paws" img_path={imgUrl}/>
                <Card caption="This is my lovely cat, Paws" img_path={imgUrl}/>
                <Card caption="This is my lovely cat, Paws" img_path={imgUrl}/>
            </div>
        </div>
    </div>
    )
}

export default AboutMe