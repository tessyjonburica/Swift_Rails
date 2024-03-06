import { NavLink, Link, Outlet } from 'react-router-dom';
import React from 'react';
import '../index.css'
import profile from '../assets/react.svg'
import logo from '../assets/swiftLogo.png'
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { GrSchedules } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { PiHeadset } from "react-icons/pi";

function Sidebar() {

    const navData = [
        { path: "/user", name: "Home", "icon": HiOutlineHome, },
        { path: "/bookings", name: "Bookings", "icon": TbBrandBooking },
        { path: "/schedule", name: "Schedule", "icon": GrSchedules },
        // { path: "/search", name: "Search", "icon": IoIosSearch },
        { path: "/settings", name: "Settings", "icon": IoSettingsOutline },
        { path: "/helpCenter", name: "Help Center", "icon": PiHeadset },

    ];

    return (
        <>
            {/* <div className="col-12 row">
                <div className="col-2 bg-primary-subtle sidebar vh-100 overflow-none position-fixed">
                    <div className="border border-danger mb-2">
                        <h2 style={{ fontFamily: 'Outfit', fontSize: '28px', fontWeight: '700', lineHeight: '33.6px', color: '#645D5D' }} className='ps-2'>Swift Rails</h2>
                    </div>
                    <ul className="nav nav-pills flex-column p-1 ">
                        {navData.map((nav, index) => (<li class="nav-item " key={index}>
                            <NavLink className='nav-link rounded active-pills:active' to={nav.path}>{nav.name}</NavLink>
                        </li>))}

                    </ul>

                    <div className="d-flex  align-items-center">


                    </div>

                    <div class="d-flex align-items-center ps-3 border border-success">
                        <div class="flex-shrink-0">
                            <img src={profile} alt="profile" className='rounded-circle border border-danger' />
                        </div>
                        <div class="flex-grow-1 d-flex align-items-center ms-1">
                            <p className='me-3 mb-0'>Adeyemi Rofiat</p>
                            <IoLogOutOutline />
                        </div>
                    </div>

                </div>
            </div>
            <div className=" col-10 border border-danger-subtle offset-2 ">

                <Outlet />
            </div> */}
            <div class="row">

                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse " style={{ backgroundColor: '#E4E7EC', }}>
                    <div className="mt-2 text-center">
                        {/* <h2 style={{ fontFamily: 'Outfit', fontSize: '28px', fontWeight: '700', lineHeight: '33.6px', color: '#4001A8' }} className='ps-2 navbar-brand'>Swift Rails</h2> */}
                        <Link className="navbar-brand d-flex justify-content-center align-items-center" to='/user'>
                            <img src={logo} alt="SwiftRails" width="75" />
                        </Link>
                    </div>

                    <div class="position-sticky pt-2">
                        <ul class=" nav nav-pills flex-column border border-warning p-2">
                            {navData.slice(0, 3).map((nav, index) => (<li class="nav-item  mt-1 mb-1 border border-info rounded" key={index}>

                                <NavLink className='nav-link rounded border border-danger pt-3 pb-3' to={nav.path}>{<nav.icon size={20} className='me-2' />} {nav.name}</NavLink>
                            </li>))}
                        </ul>
                        <div className="">

                            <ul class=" nav nav-pills flex-column border border-warning p-2 ">
                                {navData.slice(3, 5).map((nav, index) => (
                                    <li class="nav-item  mt-1 mb-1 border border-info rounded" key={index}>
                                        <NavLink className='nav-link rounded border border-danger pt-3 pb-3' to={nav.path}>
                                            {<nav.icon size={20} className='me-2' />} {nav.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>


                            <ul class="nav flex-column mb-2 profile-section">
                                <div class="d-flex align-items-center p-3 border border-success">
                                    <div class="flex-shrink-0">
                                        <img src={profile} alt="profile" className='rounded-circle border border-danger' />
                                    </div>
                                    <div class="flex-grow-1 d-flex align-items-center ms-1">
                                        <p className='me-3 mb-0'>Adeyemi Rofiat</p>
                                        <IoLogOutOutline size={25} />
                                    </div>
                                </div>

                            </ul>
                        </div>
                    </div>
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 no-overflow" style={{ backgroundColor: '#F9FAFB', maxWidth: '83.3333%' }}>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom sticky-top " style={{ backgroundColor: '#F9FAFB' }}>
                        <h2 style={{ fontFamily: 'Outfit', fontSize: '28px', fontWeight: '700', lineHeight: '33.6px', color: '#4001A8' }} className='ps-2'>Swift Rails</h2>
                        <div class="d-flex align-items-center justify-content-between p-2 border border-success">
                            <div class="flex-grow-1 d-flex align-items-center me-4 rounded-circle border border-muted p-2">
                                <IoIosNotificationsOutline size={25} />
                            </div>
                            <div class="flex-shrink-0">
                                <img src={profile} alt="profile" className='rounded-circle border border-danger' />
                            </div>
                            <div class="flex-grow-1 d-flex align-items-center ms-3">
                                <p className='me-3 mb-0'>Adeyemi Rofiat</p>
                            </div>
                        </div>

                    </div>


                    <Outlet />


                </main>
            </div>
        </>
    )
}


export default Sidebar;