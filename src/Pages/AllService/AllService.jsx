import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";



const AllService = () => {
    const fitServices = useLoaderData();

    return (
        <div className="mt-20 grid grid-cols-1 gap-10">
            {
                fitServices.map(oneService => <SingleService key={oneService._id} oneService={oneService}></SingleService>)
            }
        </div>
    );
};

export default AllService;