import { NavLink, Outlet } from 'react-router-dom';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoLogoFacebook, IoLogoInstagram, IoLogoSlack, IoLogoTwitter, IoPhonePortraitOutline } from "react-icons/io5";

function Navbar() {
    const navData = [
        { 'path': "/", "name": "Home" },
        { "path": "/about", "name": "About" },
        { "path": "/contact", "name": "Contact" },
        { "path": "/call", "name": "Call" },

    ];
    return (<>

        {/* <div className="container d-flex justify-content-between">
            <div>
                <HiOutlineEnvelope color='red' /> contact@swiftrails.com
                <IoPhonePortraitOutline color='red' /> +234123456789
            </div>
            <div>
                <IoLogoFacebook color='#abff22' />
                <IoLogoInstagram color='#abff22' />
                <IoLogoTwitter color='#abff22' />
                <IoLogoSlack color='#abff22' />
            </div>
        </div> */}
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Swift Rails</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        {navData.map((nav, index) => (<li class="nav-item" key={index}>
                            <NavLink className='nav-link' to={nav.path}>{nav.name}</NavLink>
                        </li>))}
                    </ul>
                </div>
            </div>
        </nav>
        {/* <div className="row">
           
            <div className="col-10">
            </div>
        </div> */}

        <Outlet />
    </>);

}

export default Navbar;