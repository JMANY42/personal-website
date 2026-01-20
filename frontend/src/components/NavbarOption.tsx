import { useNavigate, useLocation } from "react-router-dom";


interface NavbarOption {
    text: string;
    path: string;
}

function NavbarOption ({ text, path }: NavbarOption) {
    const navigate = useNavigate();
    const location = useLocation();
    

    let activeClassName;
    
    // if the option path is in the pathname, set active
    if (location.pathname === path || location.pathname.includes(path) && path != '/') {
        activeClassName="nav-link-active"
    } 
    
    return (
        <div 
            className={`p-1 ${activeClassName}`}
            onClick={() => {navigate(path)}}
        >
            <p className="hover:bg-accent p-1 rounded-lg">{text}</p>
        </div>
            
    )
}

export default NavbarOption