import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceData from "./ServiceData/ServiceData";
import Advantages from "../../Sections/Advantages"

const Home = () => {
    const fitServices = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto">
               {
               fitServices.slice(0, 6).map(oneService => <ServiceData key={oneService._id} oneService={oneService}></ServiceData>)
                }
            </div>
            <div className="text-center">
                <Link to='/allService'><button className="bg-[#495E57] py-2 px-3 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Show All</button></Link>
            </div>

            <Advantages></Advantages>
        </div>
    );
};

export default Home;