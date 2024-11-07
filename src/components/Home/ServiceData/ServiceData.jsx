import { IoIosPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';


const ServiceData = ({ oneService }) => {
    const { _id, service_image, service_name, service_description, service_price, providerName, providerImage } = oneService;


    return (
        <div className="shadow-md rounded-xl m-3 p-5">
            <div className="flex flex-col md:flex-row items-center gap-5">
                <div>
                    <img className="rounded-xl h-40 object-cover" src={service_image} alt="" />
                </div>
                <div>
                    <h1 className="font-bold">{service_name}</h1>
                    <p className="text-sm">{service_description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <h1 className='text-xl font-bold'>By: </h1>
                        <img className='w-12 h-12 rounded-full' src={providerImage} alt="" />
                        <p>{providerName}</p>
                    </div>
                    <p className='flex items-center gap-1 mt-2'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {service_price}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <Link to={`/viewDetail/${_id}`}><button className="bg-[#495E57] py-2 px-3 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">View Detail</button></Link>
            </div>
        </div>
    );
};

export default ServiceData;
ServiceData.propTypes = {
    oneService: PropTypes.object
}