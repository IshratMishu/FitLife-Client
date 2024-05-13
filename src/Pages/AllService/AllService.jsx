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
        <div className="mt-28">
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search services by name..."
                    value={searchText}
                    onChange={handleSearchChange}
                    className="input input-bordered border-2 border-[#F4CE14] w-72 md:w-96 shadow-md mb-3"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto">

                {filteredServices.map(oneService => (
                    <SingleService key={oneService._id} oneService={oneService} />
                ))}
            </div>
        </div>
    );
};

export default AllService;