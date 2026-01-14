
interface NavbarOption {
    img_path: string;
    caption: string;
}

function NavbarOption ({ img_path, caption }: NavbarOption) {
    
    return (
        <div className="m-4">
            <img className=""src={img_path}/>
            <p className="text-white text-xl">{caption}</p>
        </div>
    )
}

export default NavbarOption