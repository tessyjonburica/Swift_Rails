import React from "react";
import { FaTrainSubway } from "react-icons/fa6";
import PassengerDetails from "../components/passengerDetails";

function Bookings() {
    return (
        <>
            <div className="container-fluid border border-info p-5">
                <div className="container border border-danger rounded shadow">
                    <div className="d-flex align-items-center justify-content-around ">
                        <div className="d-flex align-items-center ">
                            <FaTrainSubway size={30} color="#EB8F35" />
                            <div className="ms-3">
                                <h6>Lagos - Ibadan</h6>
                                <span>Train No - LI3</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-center p-2">
                            <div>
                                <h6>15:17</h6>
                                <p>Mobolaji Johnson Station Ebute Metta</p>
                                <p>07-Mar-2024</p>
                            </div>
                            <div>
                                <h6>1hrs 33mins</h6>
                                <div>
                                    <hr />
                                </div>
                                <div className=" d-flex justify-content-center">
                                    <h6 className="text-center rounded p-2" style={{ backgroundColor: '#ffb500', color: '#fff' }}>Business Class</h6>
                                </div>
                            </div>
                            <div>
                                <h6>17:30</h6>
                                <p>Professor Wole Soyinka Station Abeokuta</p>
                                <p>07-Mar-2024</p>
                            </div>
                        </div>

                    </div>


                </div>
                <div className="container border border-primary mt-5 row">
                    <div className="col-lg-3 col-md-3 col-sm-12 border border-danger shadow">
                        <div className="p-2 border border-danger">
                            <div className="border border-warning">
                                <form action="" method="">
                                    <div className="form-check">
                                        <label className="form-label">Class</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 pt-4 pb-4 border border-info">
                        <div className="container shadow border rounded">
                            <h5 className="border-bottom p-3">Passengers Details</h5>
                            <PassengerDetails />
                            <PassengerDetails />
                            <PassengerDetails />
                            <PassengerDetails />
                            <PassengerDetails />
                            <PassengerDetails />
                        </div>
                        <div className="container shadow border rounded mt-4 mb-4">
                            <h5 className="border-bottom p-3">Contact Details</h5>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>

                                    <label for="email">&nbsp;Email</label><br />
                                    <input type="email" name="email" placeholder="Email" className="form-control" />
                                </div>
                                <div>

                                    <label for="phoneNumber">&nbsp;Phone Number</label><br />
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">+234</span>
                                        <input type="text" className="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-items-center pt-4 pb-4">
                                <button className="btn btn-success pt-2 pb-2 ps-5 pe-5">
                                    Back
                                </button>
                                <button className="btn btn-success pt-2 pb-2 ps-5 pe-5">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bookings;