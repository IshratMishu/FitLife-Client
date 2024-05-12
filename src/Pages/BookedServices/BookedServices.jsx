import { useEffect, useState } from "react";
import useAuth from "../../components/Hooks/useAuth";
import SingleBookedService from "./SingleBookedService";


const BookedServices = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/booked-service/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);


    return (
        <div className="mt-20 grid grid-cols-1">
            {  bookings.length === 0 ? (
                <p className="mt-20 max-w-screen-lg mx-auto text-3xl">No booked services</p>
            ):
                bookings.map(singleBooked => <SingleBookedService key={singleBooked._id} singleBooked={singleBooked}></SingleBookedService>)
            }
        </div>
    );
};

export default BookedServices;