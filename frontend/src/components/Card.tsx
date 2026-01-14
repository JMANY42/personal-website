
interface NavbarOption {
    img_path: string;
    caption: string;
}

function NavbarOption ({ img_path, caption }: NavbarOption) {
    
    return (
        <div className="m-8 p-4 space-y-4 rounded-2xl bg-[#6F4F2A]">
            <img className="aspect-square w-full rounded-2xl"src={img_path}/>
            <p className="text-white text-xl">{caption}</p>
        </div>
    )
}

export default NavbarOption