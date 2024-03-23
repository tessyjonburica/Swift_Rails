import React, { useState } from "react";
import { IoIosNotificationsOutline, IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function Settings() {
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState(null);

    const settingsData = [
        { path: "/profile", name: "Profile Settings", icon: CgProfile, description: 'This is your personal information' },
        { path: "/notif", name: "Notification", icon: IoIosNotificationsOutline, description: 'This is your personal information' },
        { path: "/forgotpassword", name: "Change Password", icon: MdOutlineSecurity, description: 'This is your personal information' },
        { path: "/deactivate", name: "Deactivate Account", icon: RxCross1, description: 'This is your personal information' },
    ];

    const openModal = (data) => {
        setModalData(data);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="container-fluid d-flex p-5">
                <div className="container border border-muted rounded justify-content-center align-items-center">
                    <h3 className="border-bottom p-2">Settings</h3>

                    <ul className="list-group p-5 m-auto">
                        {settingsData.map((data, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center" onClick={() => openModal(data)}>
                                <div className="me-2">{<data.icon />}</div>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{data.name}</div>
                                    {data.description}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {showModal && (
                <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={closeModal}>
                    <div className="modal-dialog modal-fullscreen modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" style={{ fontFamily: 'Outfit', fontSize: '30px', fontWeight: '700', lineHeight: '33.6px', color: '#4001A8' }}>{modalData.name}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>{modalData.description}</p>
                                <p>{modalData.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Settings;

