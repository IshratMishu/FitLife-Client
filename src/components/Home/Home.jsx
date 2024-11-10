import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceData from "./ServiceData/ServiceData";
import Advantages from "../../Sections/Advantages";
import Course from "../../Sections/Course";
import Reviews from "../../Sections/Reviews"
import { Helmet } from "react-helmet";
import Bmi from "../../Sections/Bmi";
import Brand from "../../Sections/Brand/Brand";
import Blog from "../../Sections/Blog/Blog";
import Question from "../../Sections/Question";
import useAos from "../Hooks/useAos";


const Home = () => {
    const fitServices = useLoaderData();
    useAos({ anchorPlacement: 'top-bottom' });

    return (
        <div>
            <Helmet>
                <title>Home - FitLife</title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-20 max-w-screen-lg mx-auto" data-aos="fade-up">
                <h1 className="text-2xl pl-4 pb-2">Our <span className="font-medium">Most Popular Services</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        fitServices.slice(0, 4).map(oneService => <ServiceData key={oneService._id} oneService={oneService}></ServiceData>)
                    }
                </div>
                <div className="text-center mt-5">
                    <Link to='/allService'><button className="bg-[#495E57] py-2 px-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Show All</button></Link>
                </div>
            </div>
            <Bmi></Bmi>
            <Reviews></Reviews>
            <Question></Question>
            <Advantages></Advantages>
            <Course></Course>
            <Blog></Blog>
            <Brand></Brand>
        </div>
    );
};

export default Home;