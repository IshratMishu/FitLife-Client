import { IoIosPricetags } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';


const ServiceData = ({ oneService }) => {
    const { _id, service_image, service_name, service_description, service_price, providerName, providerImage } = oneService;


    return (
        <div className="shadow-md rounded m-3 px-4 py-2">
            <div className="flex flex-col md:flex-row items-center gap-5">
                <div>
                    <img className="rounded h-40 object-cover" src={service_image} alt="" />
                </div>
                <div className="space-y-2">
                    <h1 className="font-bold">{service_name}</h1>
                    <p className="text-sm">{service_description}</p>
                    <div className='flex items-center gap-2 mt-2'>
                        <h1 className='font-semibold'>By: </h1>
                        <img className='w-10 h-10 rounded-full' src={providerImage} alt="" />
                        <p className="text-sm">{providerName}</p>
                    </div>
                    <p className='flex items-center gap-1 mt-2'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {service_price}</p>
                </div>
            </div>
            <div className="flex justify-end">
                <Link to={`/viewDetail/${_id}`}><button className="bg-[#495E57] py-1 px-2 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">View Detail</button></Link>
            </div>
        </div>
    );
};

export default ServiceData;
ServiceData.propTypes = {
    oneService: PropTypes.object
}