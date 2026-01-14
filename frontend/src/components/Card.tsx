
interface NavbarOption {
    img_path: string;
    caption: string;
}

function NavbarOption ({ img_path, caption }: NavbarOption) {
    
    return (
        <div className="m-8 p-4 space-y-4 rounded-2xl bg-[#FFD699]">
            <img className="aspect-square w-full rounded-2xl"src={img_path}/>
            <p className="text-black text-xl">{caption}</p>
        </div>
    )
}

export default NavbarOption