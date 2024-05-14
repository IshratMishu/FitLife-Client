import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { GoDotFill } from 'react-icons/go';


const SingleBookedService = ({ singleBooked }) => {

    const { serviceId, service_name, service_price, user_email, user_name, date, providerName, providerEmail, status, instructions } = singleBooked;


    return (
        <div className='mt-10 mb-14'>
            <Helmet>
                <title>Booked Services - FlexiCare</title>
            </Helmet>

            <div className="shadow-md rounded-xl mx-3 p-10 bg-[#495E57] bg-opacity-65 text-white shadow-[#F4CE14]">
                <div className='space-y-2'>
                    <p className="text-sm"><span className='font-medium text-lg'>Service-Id: </span> {serviceId}</p>
                    <h1 className="text-sm"><span className='font-medium text-lg'>Service Name: </span>{service_name}</h1>
                    <p className="text-sm"><span className='font-medium text-lg'>Price: $</span>{service_price}</p>
                    <p className="text-sm"><span className='font-medium text-lg'>Date: </span>{date}</p>
                    <div className='flex flex-col lg:flex-row justify-between mt-2'>
                        <div>
                            <h1 className='font-medium text-lg'>Provider Info:</h1>
                            <p className="text-sm"><span className='font-medium'>Name: </span>{providerName}</p>
                            <p className="text-sm"><span className='font-medium'>Email: </span>{providerEmail}</p>
                        </div>
                        <div>
                            <h1 className='font-medium text-lg'>User Info:</h1>
                            <p className="text-sm"><span className='font-medium'>Name: </span>{user_name}</p>
                            <p className="text-sm"><span className='font-medium'>Email: </span>{user_email}</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
                        <div className='mt-2'>
                            <h1 className='font-medium text-lg'>Special Instructions:</h1>
                            <p className="text-sm"><span className='font-medium'>Address: </span>{instructions.address}</p>
                            <p className="text-sm"><span className='font-medium'>Customize Plan: </span>{instructions.plan}</p>
                        </div>
                        <div>

                            <p className="font-medium text-lg flex items-center gap-1"><GoDotFill className='text-[#F4CE14]' />Status:  <span className='text-[#F4CE14] text-sm'> {status}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SingleBookedService;

SingleBookedService.propTypes = {
    singleBooked: PropTypes.object
}