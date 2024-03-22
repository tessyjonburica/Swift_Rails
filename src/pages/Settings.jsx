import { React, NavLink } from "react";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";


function Settings() {
    const settingsData = [
        { path: "/profile", name: "Profile Settings", "icon": CgProfile, description: 'This is your personal information' },
        { path: "/notif", name: "Notification", "icon": IoIosNotificationsOutline, description: 'This is your personal information' },
        { path: "/forgotpassword", name: "Change Password", "icon": MdOutlineSecurity, description: 'This is your personal information' },
        { path: "/deactivate", name: "Deactivate Account", "icon": RxCross1, description: 'This is your personal information' },
    ];
    return (
        <>
            <div className="container-fluid  d-flex p-5">
                <div className="container border border-muted rounded justify-content-center align-items-center">
                    <h3 className=" border-bottom p-2">Settings</h3>

                    <ul className="list-group p-5 m-auto">
                        {settingsData.map((data, index) => (<li key={index} class="list-group-item  d-flex justify-content-between align-items-center">
                            <div  class="me-2">{<data.icon/>}</div>
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">{data.name}</div>
                                {data.description}
                            </div>
                        </li>))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Settings;