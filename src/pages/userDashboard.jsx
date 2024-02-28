import React from "react";
import train from '../assets/Train.png';
import '../index.css'
function UserDashboard() {
    return (
        <>
            <div className="container-fluid border border-warning">
                <div className="container border border-success bg-dark text-white m-3 rounded d-flex justify-content-between align-items-center">
                    <div className=" m-5 ">

                        <p style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#ffffff' }}>Get 20% discount on your <br />first trip! </p>
                        <button className="btn btn-light pe-4 ps-4 pt-3 pb-3 mt-4" style={{fontFamily: 'inter', fontSize: '12px', fontWeight:'600', lineHeight: '17.4px', textAlign: 'center'}}>Book Now</button>
                    </div>
                    
                  <img src={train} alt="tain" className="overlap"/>
                       
                    
                </div>
            </div>

            
        </>
    );
}

export default UserDashboard;