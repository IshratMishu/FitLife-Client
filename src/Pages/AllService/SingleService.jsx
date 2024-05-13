import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FaChartArea } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SingleService = ({ oneService }) => {
    const { _id, service_image, service_name, service_description, service_area, service_price, providerName, providerImage } = oneService;


    return (
        <div className='bg-cover rounded-xl m-5' style={{ backgroundImage: `url(${service_image})` }}>
            <Helmet>
                <title>All Services - FlexiCare</title>
            </Helmet>
            <div className="card lg:m-5 m-2">
                <div className="card-body bg-[#495E57] bg-opacity-55 rounded-xl text-white hover:bg-[#495E57]">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{service_description}</p>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-bold'>By: </h1>
                        <img className='w-12 h-12 rounded-full' src={providerImage} alt="" />
                        <p>{providerName}</p>
                    </div>
                    <p className='flex items-center gap-1'><FaChartArea /> <span className='font-semibold'>Area:</span> {service_area}</p>
                    <p className='flex items-center gap-1'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {service_price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white hover:bg-[#495E57]">View Detail</button></Link>
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