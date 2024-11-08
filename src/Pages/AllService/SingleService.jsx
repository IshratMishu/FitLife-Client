import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FaChartArea } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SingleService = ({ oneService }) => {
    const { _id, service_image, service_name, service_description, service_area, service_price, providerName, providerImage } = oneService;


    return (
        <div className='m-5'>
            <Helmet>
                <title>All Services - FitLife</title>
            </Helmet>
            {/* <div className="flex bg-[#495E57] text-white shadow-md shadow-[#F4CE14] justify-between rounded-xl p-4 lg:px-20 md:px-10 md:py-5">
                <div className="rounded-xl space-y-2">
                    <img className='w-60 h-32 object-cover rounded-xl block md:hidden' src={service_image} alt="" />
                    <h2 className="card-title">{service_name}</h2>
                    <p className='text-balance'>{service_description}</p>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-bold'>By: </h1>
                        <img className='w-12 h-12 rounded-full' src={providerImage} alt="" />
                        <p>{providerName}</p>
                    </div>
                    <p className='flex items-center gap-1'><FaChartArea /> <span className='font-semibold'>Area:</span> {service_area}</p>
                    <p className='flex items-center gap-1'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {service_price}</p>
                    <div className="justify-end block md:hidden">
                        <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white hover:bg-[#495E57]">View Detail</button></Link>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <img className='w-60 h-32 object-cover rounded-xl hidden md:block' src={service_image} alt="" />
                    <div className="card-actions hidden md:block">
                        <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white">View Detail</button></Link>
                    </div>
                </div>
            </div> */}

            <div className="rounded shadow-lg border border-[#F4CE14]">
                <div className="flex items-center justify-between gap-10 px-4 py-4">

                    <div className="flex items-center gap-3">
                        <img width={100} height={100} className="w-12 h-12 rounded-full object-cover" src={providerImage} />
                        <div className="flex flex-col">
                            <h2 className="font-semibold">{providerName}</h2>
                            <p className='flex items-center gap-1 text-xs'><FaChartArea className='text-[#F4CE14]' />Area: {service_area}</p>
                        </div>
                    </div>

                </div>

                <img className="h-[150px] w-full object-cover" src={service_image} alt="service" />

                <div className="mt-3 space-y-1 px-2">
                    <h2 className="font-semibold">{service_name}</h2>
                    <h2 className="text-xs">{service_description}</h2>
                </div>

                <div className="mt-2 flex justify-between px-2 pb-2">
                    <p className='flex items-center gap-1 text-sm'><IoIosPricetags className='text-[#F4CE14]' /> <span className='font-semibold'>Price:</span> {service_price}</p>
                    <div >
                        <Link to={`/viewDetail/${_id}`}><button className="hover:bg-[#F4CE14] px-2 py-1 rounded font-semibold text-sm bg-[#495E57] text-white">View Detail</button></Link>
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


