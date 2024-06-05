import "./Navbar.css"
import logo from "../../image/logo.png"
const NavBar = ()=>{
    return (

        <nav>
            <div className="container">
                <div className="navBar">
                    <div className="nav_logo">
                        <picture><img src={logo} alt={logo} /></picture>
                    </div>
                    <div className="navbar_right_item">
                        <ul className="navbar_list">
                            <li className="nav_item"><a className="nav_link active_color" href="">Home</a></li>
                            <li className="nav_item"><a className="nav_link" href="">Service</a></li>
                            <li className="nav_item"><a className="nav_link" href="">Case</a></li>
                            <li className="nav_item"><a className="nav_link" href="">DaCode</a></li>
                            <li className="nav_item"><a className="nav_link" href="">Specialists</a></li>
                        </ul>
                        <div className="navbar_button">
                            <button>Request a Quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
};
export default NavBar;