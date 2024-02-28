import React from "react";
import '../index.css'
import { FcGoogle } from "react-icons/fc";
function LoginPage() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 col-md-6 ps-5 pe-5 hero-bg d-flex justify-content-center align-items-center" >
                        <div className="">

                            <h2 style={{ fontFamily: 'Outfit', fontSize: '56px', fontWeight: '700', lineHeight: '43px', letterSpacing: '-0.02em', textAlign: 'left', color: '#FFFFFF' }}>Let's get you a ride!</h2>
                            <p style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: '400', lineHeight: '43px', letterSpacing: '-0.02em', textAlign: 'left', color: '#E4DBDB' }}>
                                Discover a world of possibilities as you navigate through a user-friendly platform designed to simplify your travel planning.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-md-6  d-flex justify-content-center align-items-center">
                        <div className=" ">

                            <h2 style={{ fontFamily: 'Outfit', fontSize: '36px', fontWeight: '700', lineHeight: '43px', letterSpacing: '-0.02em', textAlign: 'left' }}>Hi, Welcome</h2>
                            <p className=" mb-3">Enter your email and password to create an account. <span style={{ color: '#4001A8' }}>Sign In</span></p>
                            <form action="" method="postf">

                                <input type="email" name="email" placeholder="Email" className="form-control pt-2 pb-2 mb-2" /><br />
                                <input type="password" name="password" placeholder="Password" className="form-control pt-2  mb-4 pb-2" />
                                <button style={{ backgroundColor: '#4001A8', color: '#fff', padding: "12px 25px" }} className="btn form-control rounded-pill">Login</button>
                                <p className="text-center">Forgot Password?</p>
                                <p className="text-center text-muted mt-3 mb-3">Or</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-secondary me-2 d-flex justify-content-center align-items-center form-control rounded-pill" style={{ padding: "12px 25px" }}><FcGoogle />Google</button>
                                    <button className="btn btn-dark rounded-pill form-control ms-2" style={{ padding: "12px 25px" }}>Login with Apple</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}

export default LoginPage;