import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";
import { useState } from "react";



const AllService = () => {
    const fitServices = useLoaderData();
    const [searchText, setSearchText] = useState('');

    const filteredServices = fitServices.filter(service =>
        service.service_name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="mt-28 grid grid-cols-1 gap-10 max-w-screen-xl mx-auto">
            <input
                type="text"
                placeholder="Search services by name..."
                value={searchText}
                onChange={handleSearchChange}
                className="input input-bordered border-2 border-[#F4CE14] w-96 mx-auto"
            />
            {/* {
                fitServices.map(oneService => <SingleService key={oneService._id} oneService={oneService}></SingleService>)
            } */}
            {filteredServices.map(oneService => (
                <SingleService key={oneService._id} oneService={oneService} />
            ))}
        </div>
    );
};

export default AllService;