import { useNavigate } from "react-router-dom";

interface NavbarOption {
    text: string;
    path: string;
}

function NavbarOption ({ text, path }: NavbarOption) {
    const navigate = useNavigate();
    
    return (
        <div onClick={() => {navigate(path)}}>
            {text}
        </div>
    )
}

export default NavbarOption