import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../components/Hooks/useAuth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        <div className="mt-32 grid grid-cols-2 max-w-screen-xl mx-auto">
            <Helmet>
                <title>Service-To-Do - FlexiCare</title>
            </Helmet>
            {services.length === 0 ? (
                <p className="mt-20 text-3xl text-center">No services</p>
            ) : (
                services.map(service => (
                    <div key={service._id} className="flex justify-between items-center border m-5 p-3">
                        <div className="space-y-2 w-2/3">
                            <p><span className="font-semibold">Service Name:</span>{service.service_name}</p>
                            <p><span className="font-semibold">Date:</span> {service.date}</p>
                            <p><span className="font-semibold">Price:</span> {service.service_price}</p>
                            <div className="border p-2">
                                <h1 className="font-semibold">Special Instructions</h1>
                                <p><span className="font-medium">Plan:</span> {service.instructions.address}</p>
                                <p><span className="font-medium">Address:</span> {service.instructions.plan}</p>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Status:</span>
                            </label>
                            <select
                                className="select input input-bordered"
                                value={service.status}
                                onChange={(e) => handleStatusChange(service._id, e.target.value)}
                            >
                                <option className="cursor-not-allowed" value="pending" disabled={service.status === "working" || service.status === "completed"}>
                                    Pending
                                </option>
                                <option value="working" disabled={service.status === "completed"}>
                                    Working
                                </option>
                                <option value="completed" disabled={service.status !== "working"}>
                                    Completed
                                </option>
                            </select>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ServiceToDo;
