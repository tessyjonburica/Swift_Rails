import { useState, React, useEffect } from "react";
import train from '../assets/Train.png';
import '../index.css'
import { TbTransferVertical } from "react-icons/tb";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, startOfDay, format, parse } from 'date-fns';


function UserDashboard() {
    return (
        <>
            <div className="container-fluid  mb-1">
                <div className="container border border-success bg-dark text-white rounded d-flex justify-content-between align-items-center">
                    <div className=" m-5 ">

                        <p style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#ffffff' }}>Get 20% discount on your <br />first trip! </p>
                        <button className="btn btn-light pe-4 ps-4 pt-3 pb-3 mt-4" style={{ fontFamily: 'inter', fontSize: '12px', fontWeight: '600', lineHeight: '17.4px', textAlign: 'center' }}>Book Now</button>
                    </div>

                    <img src={train} alt="tain" className="overlap" />


                </div>
            </div>

            <div className="container-fluid  mt-1">
                <div className="container rounded mt-4" style={{ border: '1px solid #D0D5DD' }}>
                    <h3 className="p-3" style={{ borderBottom: '1px solid #D0D5DD', fontFamily: 'Outfit', fontSize: '20px', fontWeight: '500', lineHeight: '24px', color: '#353535' }}>Search</h3>
                    <div class="row align-items-center justify-content-between p-5">
                        <div class="col-md-4 text-center">
                            <select class="form-select p-3" aria-label="from" style={{ backgroundColor: '#F0F2F5' }}>
                                <option selected>From</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        <div class="col-md-1 text-center" >

                            <TbTransferVertical size={50} style={{ backgroundColor: '#F0F2F5' }} className="border border-muted p-3 rounded-circle color-muted" />
                        </div>
                        <div class="col-md-4 text-center" >
                            <select class="form-select p-3" aria-label="to" style={{ backgroundColor: '#F0F2F5' }}>
                                <option selected>To</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>

                        </div>
                        <div class="col-md-3 text-center">
                            <button className="btn pe-5 ps-5 pt-3 pb-3 rounded-pill text-white" style={{ backgroundColor: '#4001A8' }}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-1 mb-4">
                <div className="container rounded mt-4" style={{ border: '1px solid #D0D5DD' }}>

                    <div className="bg-white p-4 m-4 rounded-lg">
                        <div className="d-flex justify-content-between mb-2 p-2 border-bottom">

                            <h3 className="h3 font-weight-bold ">Train Schedule</h3>
                            <CalendarComponent />

                        </div>

                        <tr className="d-flex justify-content-between align-items-center" style={{ width: '100%', backgroundColor: '#F0F2F5' }}>
                            <th style={{ padding: '8px' }}>Destination</th>
                            <th style={{ padding: '8px', marginRight: '70px' }}>Date</th>
                            <th className="me-5" style={{ padding: '8px' }}>Time</th>
                        </tr>


                        {/* Repeat TrainScheduleItem for each train */}
                        <TrainScheduleItem />
                        <TrainScheduleItem />
                        <TrainScheduleItem />
                        <TrainScheduleItem />
                        <TrainScheduleItem />
                        <TrainScheduleItem />
                    </div>


                </div>
            </div>


        </>
    );
}

const TrainScheduleItem = () => (
    <>
        {/* <div className="d-flex justify-content-between align-items-center p-4 border-top deem" >
            <div className="d-flex align-items-center space-2">
                <span className="rounded-circle bg-success w-4 h-4"></span>
                <span>LOS - ABK</span>
            </div>
            <div className="text-secondary">Apr 12, 2023</div>
            <div className="d-flex align-items-center space-2">
                <span className="text-danger">07:32AM</span>
                <span className="mx-2"></span>
                <span className="text-success">09:32AM</span>
            </div>
        </div> */}

        <table style={{ borderCollapse: 'collapse', width: '100%' }}>

            <tr className="d-flex justify-content-between align-items-center deem p-4">
                <td style={{ padding: '8px' }}>
                    <div className="d-flex align-items-center space-2">
                        <span className="rounded-circle bg-success w-4 h-4"></span>
                        <span>LOS - ABK</span>
                    </div>
                </td>
                <td style={{ padding: '8px' }}>
                    <div className="text-secondary">Apr 12, 2023</div>
                </td>
                <td style={{ padding: '8px' }}>
                    <div className="d-flex align-items-center space-2">
                        <span className="text-danger">07:32AM</span>
                        <span className="mx-2"></span>
                        <span className="text-success">09:32AM</span>
                    </div>
                </td>
            </tr>

        </table>
    </>
);

// const CalendarComponent = () => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
//     const today = startOfDay(new Date());
//     const tomorrow = startOfDay(addDays(new Date(), 1));

//     const isDateSelectable = (date) => {
//         const currentDate = startOfDay(new Date());
//         return date.getTime() >= currentDate.getTime();
//     };

//     const handleDateChange = (date) => {
//         if (isDateSelectable(date)) {
//             setSelectedDate(date);
//             console.log('Selected Date:', date);
//         }
//     };
//     return (
//         <div>
//             <DatePicker
//                 className="form-control"
//                 selected={selectedDate}
//                 onChange={handleDateChange}
//                 minDate={today}
//                 maxDate={addDays(today, 1)}
//             />
//         </div>
//     );

// };


const CalendarComponent = () => {
    const initialSelectedDate = format(new Date(), "do MMM. yyyy"); // Set default date as formatted string
    const [selectedDate, setSelectedDate] = useState(parse(initialSelectedDate, "do MMM. yyyy", new Date()));
    const today = startOfDay(new Date());
    const tomorrow = addDays(today, 1);

    const isDateSelectable = (date) => {
        const currentDate = startOfDay(new Date());
        return date.getTime() >= currentDate.getTime();
    };

    const handleDateChange = (date) => {
        if (isDateSelectable(date)) {
            setSelectedDate(date);
        }
    };

    useEffect(() => {
        // Update the default date when the component mounts
        setSelectedDate(parse(initialSelectedDate, "do MMM. yyyy", new Date()));
    }, [initialSelectedDate]);

    return (
        <>


            <DatePicker
                className="form-control"
                selected={selectedDate}
                onChange={handleDateChange}
                minDate={today}
                maxDate={tomorrow}
            />
            <div className="text-info">
                Selected Date: {format(selectedDate, "do MMM. yyyy")}
            </div>
        </>
    );
};

export default UserDashboard;