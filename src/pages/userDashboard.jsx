import React from "react";
import train from '../assets/Train.png';
function UserDashboard() {
    return (
        <>
            <div className="container-fluid border border-warning">
                <div className="container border border-success bg-dark text-white m-3 rounded d-flex justify-content-between align-items-center">
                    <div className="border border-white m-5 ">

                        <p style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#ffffff' }}>Get 20% discount on your <br />first trip </p>
                        <button className="btn btn-light pe-4 ps-4 pt-3 pb-3 mt-4">Book Now</button>
                    </div>
                    <div className="border border-white m-5">
                        <img src={train} alt="tain" />
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserDashboard;