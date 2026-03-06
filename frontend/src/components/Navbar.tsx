import NavbarOption from "./NavbarOption.tsx"

function Navbar() {

    const options = [
        {text: 'Home', path: '/'}, 
        {text: 'About Me', path: '/about-me'}, 
        {text: 'Projects', path: '/projects'},
        {text: 'Canvas', path: '/canvas'},
        {text: 'Contact Me', path: '/contact'}
    ];
    return (
        // make navbar sticky on small screens and ensure it renders above content
        <div className="sticky top-0 z-50 flex gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 navbar">
            {options.map((option, id) => (
                <li 
                    key={id}
                    className="cursor-pointer text-main text-base sm:text-lg md:text-xl lg:text-2xl">
                    <NavbarOption text={option.text} path={option.path}></NavbarOption>
                </li>
            ))}
        </div>
    )
}

export default Navbar