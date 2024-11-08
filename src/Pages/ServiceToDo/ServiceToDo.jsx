import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../components/Hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fit from '../../assets/error.jpg'

const ServiceToDo = () => {
    const { user } = useAuth();
    const [services, setServices] = useState([]);

    const url = `http://localhost:5000/serveToDo/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [url]);

    const handleStatusChange = async (id, status) => {
        try {
            const response = await fetch(`http://localhost:5000/workingStatus/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status })
            });
            if (!response.ok) {
                throw new Error('Failed to update status');
            }
            // Update status in local state
            setServices(prevServices =>
                prevServices.map(service =>
                    service._id === id ? { ...service, status } : service
                )
            );
        } catch (error) {
            console.error(error);
        }

        if (status === "working") {
            toast.success('Your service is currently in the works.', {
                autoClose: 2000
            });
        }
        if (status === "completed") {
            toast.success('Congratulations! Your service has been successfully completed.', {
                autoClose: 2000
            });
        }
    };
   

    return (
     <div className=" bg-cover" style={{backgroundImage: `url(${fit})`}}>
         <h1 className="text-center text-balance pt-28 text-white font-semibold text-2xl">Thank you for choosing us for your service needs!You can reflect the current status of your service here.</h1>
           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
            <Helmet>
                <title>Service-To-Do - FitLife</title>
            </Helmet>
            {services.length === 0 ? (
                <p className="mt-20 text-2xl text-center p-2 text-white bg-[#F4CE14]">Looks like no one has booked your services yet!</p>
            ) : (
                services.map(service => (
                    <div key={service._id} className="flex flex-col md:flex-row justify-between items-center border m-5 p-3 bg-[#495E57] bg-opacity-45 shadow-sm shadow-[#F4CE14]">
                        <div className="space-y-2 w-auto lg:w-2/3 text-white">
                            <p><span className="font-semibold">Service Name:</span>{service.service_name}</p>
                            <p><span className="font-semibold">Date:</span> {service.date}</p>
                            <p><span className="font-semibold">Price: $</span>{service.service_price}</p>
                            <div className="border p-2">
                                <h1 className="font-semibold">Special Instructions</h1>
                                <p><span className="font-medium">Plan:</span> {service.instructions.address}</p>
                                <p><span className="font-medium">Address:</span> {service.instructions.plan}</p>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-white font-bold">Status:</span>
                            </label>
                            <select
                                className="select input input-bordered"
                                value={service.status}
                                onChange={(e) => handleStatusChange(service._id, e.target.value)}
                            >
                                <option
                                    value="pending"
                                    disabled={service.status === "working" || service.status === "completed"}>
                                    Pending
                                </option>
                                <option
                                    value="working"
                                    disabled={service.status === "completed"}>
                                    Working
                                </option>
                                <option
                                    value="completed"
                                    disabled={service.status !== "working"}>
                                    Completed
                                </option>
                            </select>
                        </div>
                    </div>
                ))
            )}
        </div>
     </div>
    );
};

export default ServiceToDo;
