import { useEffect, useState } from "react";
import useAuth from "../../components/Hooks/useAuth";
import SingleBookedService from "./SingleBookedService";
import fit from '../../assets/error.jpg'

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
       <div className="bg-cover mt-20" style={{backgroundImage: `url(${fit})`}}>
        <h1 className="text-center pt-10 text-white text-balance font-semibold text-2xl">Welcome to your booked services page. <br /> Here, you can find all the information about the services you have booked with us.</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
            {  bookings.length === 0 ? (
                <p className="max-w-screen-lg mx-auto text-3xl">No booked services</p>
            ):
                bookings.map(singleBooked => <SingleBookedService key={singleBooked._id} singleBooked={singleBooked}></SingleBookedService>)
            }
        </div>
       </div>
    );
};

export default BookedServices;