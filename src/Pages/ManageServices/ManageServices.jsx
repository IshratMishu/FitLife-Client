import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../components/Hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import why from '../../assets/why.mp4'

const ManageServices = () => {
    const { user } = useAuth() || {};
    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`https://service-assignment11-server.vercel.app/fitnesses/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
            });
    }, [user, control]);


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#495E57",
            cancelButtonColor: "#F4CE14",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://service-assignment11-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                            setControl(!control);
                        }
                    })
            }
        })
    }


    return (
        <div className="mt-28 max-w-screen-xl mx-auto">
            <div className="text-center text-balance">
                <h1 className="text-2xl font-bold mb-2">Welcome to the Service Management page</h1>
                <p className="font-medium">You can manage all your services here. Whether you need to update details, or remove a service altogether, this is your hub for maintaining an up-to-date.</p>
            </div>
            <Helmet>
                <title>Manage Service - FitLife</title>
            </Helmet>
            <div className="flex gap-5 md:mx-10">
                <div className="relative w-1/4 mt-10 hidden lg:block">
                    <video autoPlay loop muted className="object-cover w-full rounded-xl">
                        <source src={why} type="video/mp4" />
                    </video>
                    <div className="absolute translate-y-1/2 translate-x-1/2 top-0 left-0">
                        <h1 className="font-semibold text-white">Book any of our <br /> services and <br /> enjoy a <br /> <span className="text-lg text-[#F4CE14]">45%</span> discount!</h1>
                        <Link to='/allService'> <button className="bg-[#F4CE14] py-1 px-2 rounded text-[#F5F7F8] font-medium text-sm hover:bg-[#495E57]">Check Now</button></Link>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-10 w-auto lg:w-3/4">
                    {items.length === 0 ? (
                <p className="mt-20 text-3xl text-center text-[#F4CE14]">Hmm!..You did not add any service yet!</p>
            ) :
                    items.map((adding) => (
                        <div key={adding._id} className="flex gap-2 md:gap-14 shadow-md p-2">
                            <img className="w-24 h-28 object-cover md:w-72 md:h-44 rounded-xl" src={adding.service_image} alt="fitness" />
                            <div className="">
                                <div className="flex md:flex-row flex-col md:gap-20 lg:gap-32">
                                    <div>
                                        <h2 className="text-xl font-bold">{adding.service_name}</h2>
                                        <p><span className="font-medium">By</span> {adding.providerName}</p>
                                    </div>
                                    <div>
                                        <p><span className="font-semibold">Price: </span>${adding.service_price}</p>
                                        <p><span className="font-semibold">Area:</span> {adding.service_area}</p>
                                    </div>
                                </div>
                                <p className="text-balance text-sm">{adding.service_description}</p>
                                <div className="flex gap-2 md:gap-5 justify-end">
                                    <Link to={`/updateService/${adding._id}`}> <div className="bg-[#495E57] text-sm md:text-base py-2 mt-2 md:mt-5 px-3 rounded text-white md:font-semibold hover:bg-[#F4CE14]">Update</div></Link>
                                    <div className="bg-[#495E57] text-sm md:text-base py-2 mt-2 md:mt-5 px-3 rounded text-white md:font-semibold hover:bg-[#F4CE14]"
                                        onClick={() => handleDelete(adding._id)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageServices;