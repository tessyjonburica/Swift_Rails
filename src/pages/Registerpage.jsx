import React from "react";
import '../index.css'
function Registerpage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 col-md-6 ps-5 pe-5 hero-bg d-flex justify-content-center align-items-center" >
                        <div className="">

                            <h2 style={{ fontFamily: 'Outfit', fontSize: '56px', fontWeight: '700', lineHeight: '50px', letterSpacing: '-0.02em', textAlign: 'left', color: '#FFFFFF' }}>Welcome Aboard! Your Journey Begins Here.</h2>
                            <p style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: '400', lineHeight: '24px', letterSpacing: '-0.02em', textAlign: 'left', color: '#E4DBDB' }}>
                                Embark on a seamless and convenient travel experience with our train ticket purchase and reservation application
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-6  d-flex justify-content-center align-items-center">
                        <div className=" ">

                            <h2 style={{ fontFamily: 'Outfit', fontSize: '36px', fontWeight: '700', lineHeight: '43px', letterSpacing: '-0.02em', textAlign: 'left' }}>Input Details</h2>
                            <p className=" mb-3">Input your personal details to set up your account. <span style={{ color: '#4001A8' }}>Sign In</span></p>
                            <form action="" method="postf">

                                <input type="text" name="firstName" placeholder="First Name" className="form-control pt-2 pb-2 mb-2" />
                                <input type="text" name="lastName" placeholder="Last Name" className="form-control pt-2 pb-2 mb-2" />
                                <input type="date" name="dob" placeholder="Date of Birth" className="form-control pt-2 pb-2 mb-2" />
                                <div className="d-flex justify-content-between border mb-2 p-2 rounded">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="Male" />
                                        <label class="form-check-label" for="male">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="Female" checked/>
                                        <label class="form-check-label" for="female">
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <input type="text" name="nin" placeholder="NIN" className="form-control pt-2 pb-2 mb-2 " />
                                <div class="input-group flex-nowrap mb-2">
                                    <span class="input-group-text" id="addon-wrapping">+234</span>
                                    <input type="text" class="form-control" placeholder="Phone number" />
                                </div>
                                <button style={{ backgroundColor: '#4001A8', color: '#fff', padding: "12px 25px" }} className="btn form-control rounded-pill mt-3 mb-2">Sign Up</button>
                                <p style={{ fontFamily: 'Outfit', fontSize: '12px', fontWeight: '400', lineHeight: '14.4px', letterSpacing: '-0.02em', textAlign: 'center', color: 'grey' }}>
                                By continuing , you agree to Swift Rails Terms  of Service and Privacy Policy
                                </p>

                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Registerpage;