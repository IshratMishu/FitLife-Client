import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { IoIosPricetags } from "react-icons/io";
import { Link, useParams } from "react-router-dom";


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
        <div className="mt-28">
             <Helmet>
                <title>Service Detail - FlexiCare</title>
            </Helmet>
            <div className="flex gap-3 items-center ml-10">
                <img className="w-20 h-20 rounded-full" src={fit.providerImage} alt="" />
                <div>
                    <p><span className="font-semibold text-lg">Provider Name:</span> {fit.providerName}</p>
                    <p><span className="font-semibold text-lg">Area:</span> {fit.service_area}</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl lg:m-5 m-2">
                <figure className="lg:px-10 lg:pt-10 p-2">
                    <img className="rounded-xl h-96 w-full object-cover" src={fit.service_image} alt="fitness" />
                </figure>
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">{fit.service_name}</h2>
                    <p className="text-center">{fit.service_description}</p>
                    <div className='flex items-center gap-2 mx-auto'>
                        <h1 className='text-xl font-bold'>By: </h1>
                        <img className='w-12 h-12 rounded-full' src={fit.providerImage} alt="" />
                        <p>{fit.providerName}</p>
                    </div>
                    <p className='flex items-center gap-1 justify-center'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {fit.service_price}</p>
                    <Link className="flex justify-center" to={`/bookNow/${fit._id}`}><button className="bg-[#495E57] py-2 px-3 mt-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetail;