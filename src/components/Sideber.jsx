import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import '../index.css'
import profile from '../assets/react.svg'
import { IoLogOutOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
function Sidebar() {
    const navData = [
        { 'path': "/user", "name": "Home" },
        { "path": "/search", "name": "Search" },
        { "path": "/schedule", "name": "Schedule" },
        { "path": "/contact", "name": "Contact" },
        { "path": "/helpCenter", "name": "Help Center" },

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
                    <div className="mt-2 ">
                        <h2 style={{ fontFamily: 'Outfit', fontSize: '28px', fontWeight: '700', lineHeight: '33.6px', color: '#645D5D' }} className='ps-2 navbar-brand'>Swift Rails</h2>
                    </div>
                    <div class="position-sticky pt-2">
                        <ul class=" nav nav-pills flex-column border border-warning p-2">
                            {navData.map((nav, index) => (<li class="nav-item  mt-1 mb-1  rounded" key={index}>
                                <NavLink className='nav-link rounded' to={nav.path}>{nav.name}</NavLink>
                            </li>))}
                        </ul>

                        <ul class="nav flex-column mb-2 ">
                            <div class="d-flex align-items-center p-3 border border-success">
                                <div class="flex-shrink-0">
                                    <img src={profile} alt="profile" className='rounded-circle border border-danger' />
                                </div>
                                <div class="flex-grow-1 d-flex align-items-center ms-1">
                                    <p className='me-3 mb-0'>Adeyemi Rofiat</p>
                                    <IoLogOutOutline />
                                </div>
                            </div>

                        </ul>
                    </div>
                </nav>
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 " style={{backgroundColor: '#F9FAFB'}}>
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom sticky-top " style={{backgroundColor: '#F9FAFB'}}>
                        <h2 style={{ fontFamily: 'Outfit', fontSize: '28px', fontWeight: '700', lineHeight: '33.6px', color: '#645D5D' }} className='ps-2'>Swift Rails</h2>
                        <div class="d-flex align-items-center justify-content-between p-2 border border-success">
                            <div class="flex-grow-1 d-flex align-items-center me-4 rounded-circle border border-muted p-2">
                                <IoIosNotificationsOutline />
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