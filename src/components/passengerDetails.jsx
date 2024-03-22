import { IoMdCloseCircle } from "react-icons/io";

function PassengerDetails() {
    return (
        <>
            <form action="" className="border-bottom  pb-3 pt-3">
                <div className="align-items-center d-flex justify-content-between mb-3">
                    <div>
                        Coach No/ Seat No: &nbsp;
                        <span>C01/7</span>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <label for="passengerType">Passenger</label><br />
                        <select class="form-select" aria-label="Default select example">
                            <option value="Child">Child</option>
                            <option selected value="Adult">Adult</option>
                        </select>
                    </div>
                    <div>
                        <label for="passengerName">Passenger Name</label><br />
                        <input type="text" name="passengerName" placeholder="Passenger Name" className="form-control" />
                    </div>
                    <div>
                        <label for="NIN">NIN Number</label><br />
                        <input type="text" name="NIN" placeholder="NIN Number" className="form-control" />
                    </div>
                    <div>
                        <label for="Email">Email</label><br />
                        <input type="email" name="Email" placeholder="Email" className="form-control" />
                    </div>
                    <div>
                        <label for="phoneNumber">Phone Number</label><br />
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" />
                    </div>
                    <div>
                        <IoMdCloseCircle />
                    </div>
                </div>
            </form>
        </>
    );
}

export default PassengerDetails;