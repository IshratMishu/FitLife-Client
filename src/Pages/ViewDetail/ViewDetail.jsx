import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoIosPricetags } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import fitImg from '../../assets/fit2.mp4'

const ViewDetail = () => {
    const { id } = useParams();
    const [fit, setFit] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/fitness/${id}`)
            .then(res => res.json())
            .then(data => {
                setFit(data);
            })
    }, [id]);


    return (
        <div className="mt-16 md:mt-20">
            <Helmet>
                <title>Service Detail - FlexiCare</title>
            </Helmet>
            <div className="relative h-72 text-white max-w-screen-2xl mx-auto">
                <video autoPlay loop muted className="absolute object-cover w-full h-full">
                    <source src={fitImg} type="video/mp4" />
                </video>
                <div className="absolute flex gap-3 items-center ml-4 mt-16 md:m-16">
                    <img className="w-20 h-20 rounded-full" src={fit.providerImage} alt="" />
                    <div>
                        <p><span className="font-semibold text-lg">Provider Name:</span> {fit.providerName}</p>
                        <p><span className="font-semibold text-lg">Area:</span> {fit.service_area}</p>
                    </div>
                </div>
            </div>

            <div className="shadow-md rounded-xl p-5 max-w-screen-xl mx-auto">
                <div className="flex flex-col md:flex-row justify-around items-center gap-5">
                    <div>
                        <img className="rounded-xl h-80 object-cover" src={fit.service_image} alt="" />
                    </div>
                    <div className="p-4 space-y-2 border-l-2 border-b-2 border-[#F4CE14]">
                        <h1 className="font-bold text-2xl">{fit.service_name}</h1>
                        <p className="text-sm">{fit.service_description}</p>
                        <div className='flex items-center gap-2 mt-2'>
                            <h1 className='text-xl font-bold'>By: </h1>
                            <img className='w-12 h-12 rounded-full' src={fit.providerImage} alt="" />
                            <p>{fit.providerName}</p>
                        </div>
                        <p className='flex items-center gap-1 mt-2'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {fit.service_price}</p>
                        <div className="flex justify-end">
                        <Link to={`/bookNow/${fit._id}`}><button className="bg-[#495E57] py-2 px-3 mt-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Book Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;