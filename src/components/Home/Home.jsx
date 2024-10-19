import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceData from "./ServiceData/ServiceData";
import Advantages from "../../Sections/Advantages";
import Course from "../../Sections/Course";
import Reviews from "../../Sections/Reviews"
import { Helmet } from "react-helmet";

const Home = () => {
    const fitServices = useLoaderData();

    return (
        <div>
             <Helmet>
                <title>Home - FitLife</title>
            </Helmet>
            <Banner></Banner>
            <div className="text-2xl font-semibold mt-20 pl-4 max-w-screen-lg mx-auto">Our Most Popular Services</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-lg mx-auto">
               {
               fitServices.slice(0, 6).map(oneService => <ServiceData key={oneService._id} oneService={oneService}></ServiceData>)
                }
            </div>
            <div className="text-center mt-5">
                <Link to='/allService'><button className="bg-[#495E57] py-2 px-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14] hover:shadow-none shadow-md shadow-[#F4CE14]">Show All</button></Link>
            </div>

<Reviews></Reviews>
            <Advantages></Advantages>
            <Course></Course>
        </div>
    );
};

export default Home;