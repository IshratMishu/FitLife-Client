import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../../components/Hooks/useAuth";


const ServiceToDo = () => {
    const { user } = useAuth();
    const [serve, setServe] = useState([]);

    const url = `http://localhost:5000/serveToDo/${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServe(data))
    }, [url]);

    const handleStatus = (id, prevStatus, status) => {
        if (prevStatus === status) return console.log('sory');
        console.log(id, prevStatus, status);
        fetch(`http://localhost:5000/workingStatus/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div className="mt-32 grid grid-cols-2 max-w-screen-xl mx-auto" >
            <Helmet>
                <title>Service-To-Do - FlexiCare</title>
            </Helmet>
            {serve.length === 0 ? (
                <p className="mt-20 text-3xl text-center">No services</p>
            ) :
                serve.map(one => <div key={one._id} className="flex justify-between items-center border m-5 p-3">
                    <div className="space-y-2 w-2/3">
                        <p><span className="font-semibold">Service Name:</span>{one.service_name}</p>
                        <p><span className="font-semibold">Date:</span> {one.date}</p>
                        <p><span className="font-semibold">Price:</span> {one.service_price}</p>
                        <div className="border p-2">
                            <h1 className="font-semibold">Special Instructions</h1>
                            <p><span className="font-medium">Plan:</span> {one.instructions.address}</p>
                            <p><span className="font-medium">Address:</span> {one.instructions.plan}</p>
                        </div>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text font-bold">Status:</span>
                        </label>
                        <select className="select input input-bordered">
                            <option onClick={handleStatus(one._id, one.status, 'working')}>{one.status}</option>
                            <option>Working</option>
                            <option onClick={handleStatus(one._id, one.status, 'Completed')}>Completed</option>
                        </select>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ServiceToDo;