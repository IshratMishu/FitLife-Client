import PropTypes from 'prop-types';
import { FaChartArea } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';

const SingleService = ({ oneService }) => {
    const { service_image, service_name, service_description, service_area, service_price, service_provider } = oneService;


    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-xl lg:m-5 m-2">
                <figure className="lg:p-10 p-2">
                    <img className="rounded-xl h-52" src={service_image} alt="fitness" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{service_description}</p>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-bold'>By: </h1>
                        <img className='w-12 h-12 rounded-full' src={service_provider.image} alt="" />
                        <p>{service_provider.name}</p>
                    </div>
                    <p className='flex items-center gap-1'><FaChartArea /> <span className='font-semibold'>Area:</span> {service_area}</p>
                    <p className='flex items-center gap-1'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {service_price}</p>
                    <div className="card-actions justify-end">
                        <button className="bg-[#495E57] py-2 px-3 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;

SingleService.propTypes = {
    oneService: PropTypes.object
}