import NavbarOption from "./NavbarOption.tsx"

function Navbar() {

    //TODO (maybe): dynamically get Navbar options from backend 
    //reason: might want to add sections or serve different options to different users
    const options = [
        {text: 'Home', path: '/'}, 
        {text: 'About Me', path: '/about-me'}, 
        {text: 'Projects', path: '/projects'}
    ];
    return (
        <div className="flex gap-10 px-8 py-4 bg-[#3D5A80]">
            {options.map((option, id) => (    // Map over options to create list items
                <li 
                    key={id}
                    className="cursor-pointer text-white text-2xl"> {/* List items styling */}
                    <NavbarOption text={option.text} path={option.path}></NavbarOption>
                </li>
            ))}
        </div>
    )
}

export default Navbar