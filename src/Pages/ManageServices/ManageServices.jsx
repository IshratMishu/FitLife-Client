import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../components/Hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const ManageServices = () => {
    const { user } = useAuth() || {};
    const [items, setItems] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`http://localhost:5000/fitnesses/${user?.email}`)
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
                fetch(`http://localhost:5000/delete/${_id}`, {
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
        <div className="mt-20">
             <Helmet>
                <title>Manage Service - FlexiCare</title>
            </Helmet>
            <h1 className="text-center font-semibold text-2xl mt-16 text-gray-700"></h1>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                {items.map((adding) => (
                    <div key={adding._id} className="card bg-base-100 shadow-lg shadow-[#81c784]">
                        <figure><img className="w-96 h-60 p-5" src={adding.service_image} alt="fitness" /></figure>
                        <div className="card-body">
                            <h2><span className="font-semibold">Product Name:</span> {adding.service_name}</h2>
                            <p><span className="font-semibold">Price:</span> {adding.service_price}</p>
                            <p><span className="font-semibold">Area:</span> {adding.service_area}</p>
                            <p><span className="font-semibold"></span> {adding.service_description}</p>
                            <div className="card-actions justify-center lg:justify-end">
                                <Link to={`/updateService/${adding._id}`}> <div className="bg-[#495E57] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#F4CE14]">Update</div></Link>
                                <div className="bg-[#495E57] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#F4CE14]"
                                    onClick={() => handleDelete(adding._id)}>Delete</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageServices;