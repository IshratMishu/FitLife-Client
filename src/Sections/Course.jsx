import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vid1 from "../assets/vid1.mp4"

const Course = () => {
    const [days, setDays] = useState(2);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(46);

    useEffect(() => {
        // Function to update countdown values
        const updateCountdown = () => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    // Reset seconds to 59 when it reaches 0
                    setMinutes(prevMinutes => {
                        if (prevMinutes === 0) {
                            // Reset minutes to 59 when it reaches 0
                            setHours(prevHours => {
                                if (prevHours === 0) {
                                    // Reset hours to 23 when it reaches 0
                                    setDays(prevDays => (prevDays === 0 ? 0 : prevDays - 1));
                                    return 23;
                                }
                                return prevHours - 1;
                            });
                            return 59;
                        }
                        return prevMinutes - 1;
                    });
                    return 59;
                }
                return prevSeconds - 1;
            });
        };

        const countdownInterval = setInterval(updateCountdown, 1000);

        return () => clearInterval(countdownInterval);
    }, []);

    // Function to format countdown values
    const formatCountdownValue = value => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div className="mt-24 flex md:flex-row flex-col items-center max-w-screen-xl mx-auto md:relative">
            <div className="lg:ml-48 md:m-4">
                <video autoPlay loop muted className="rounded-2xl" width="300" >
                    <source src={vid1} type="video/mp4" />
                </video>
            </div>

            <div className="md:absolute transform -translate-y-3 md:right-12 lg:right-72 border-4 border-[#F4CE14] md:px-10 px-2 py-4 space-y-2">
                <h1 className="text-center text-xl font-semibold">Our Special Fitness Class</h1>
                <p className="text-center">Sale of <span className="font-semibold">30%</span> for all</p>
                <h1 className="text-center text-2xl font-bold">Deals Of The Week</h1>
                <hr />
                <div className="grid grid-flow-col gap-2 md:gap-5 text-center auto-cols-max">
                    <div className="flex flex-col md:p-2 bg-[#F4CE14] rounded-box">
                        <span className="countdown text-5xl">
                            <span style={{ "--value": days }}>{formatCountdownValue(days)}</span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col md:p-2 bg-[#F4CE14] rounded-box">
                        <span className="countdown text-5xl">
                            <span style={{ "--value": hours }}>{formatCountdownValue(hours)}</span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col md:p-2 bg-[#F4CE14] rounded-box">
                        <span className="countdown text-5xl">
                            <span style={{ "--value": minutes }}>{formatCountdownValue(minutes)}</span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col md:p-2 bg-[#F4CE14] rounded-box">
                        <span className="countdown text-5xl">
                            <span style={{ "--value": seconds }}>{formatCountdownValue(seconds)}</span>
                        </span>
                        sec
                    </div>
                </div>
                <Link className="flex justify-center" to='/bookNow/663e1f570d7eedcbc7a88c94'><button className="bg-[#495E57] py-2 px-3 mt-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Book Now</button></Link>
            </div>
        </div>
    );
};

export default Course;
