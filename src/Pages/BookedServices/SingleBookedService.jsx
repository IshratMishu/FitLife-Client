import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';


const SingleBookedService = ({ singleBooked }) => {

    const { serviceId, service_name, service_image, service_price, user_email, user_name, date, providerName, providerEmail, status } = singleBooked;


    return (
        <div className='mt-5 max-w-screen-lg mx-auto'>
            <Helmet>
                <title>Booked Services - FlexiCare</title>
            </Helmet>

            <div className="shadow-md rounded-xl m-3 p-5">
                <div className="flex flex-col md:flex-row items-center gap-5">
                    <div>
                        <img className="rounded-xl h-40 object-cover" src={service_image} alt="" />
                    </div>
                    <div className='space-y-2'>
                        <p className="text-sm"><span className='font-medium'>Service-Id: </span> {serviceId}</p>
                        <h1 className="text-sm"><span className='font-medium'>Service Name: </span>{service_name}</h1>
                        <p className="text-sm"><span className='font-medium'>Price: </span>{service_price}</p>
                        <div className='mt-2'>
                            <h1 className='font-medium'>Provider Info:</h1>
                            <p className="text-sm"><span className='font-medium'>Name: </span>{providerName}</p>
                            <p className="text-sm"><span className='font-medium'>Email: </span>{providerEmail}</p>
                        </div>
                        
                        <div className='mt-2'>
                            <h1 className='font-medium'>User Info:</h1>
                            <p className="text-sm"><span className='font-medium'>Name: </span>{user_name}</p>
                            <p className="text-sm"><span className='font-medium'>Email: </span>{user_email}</p>
                        </div>
                        {/* <p className="text-sm"><span className='font-medium'>Address: </span>{instructions.address}</p>
                        <p className="text-sm"><span className='font-medium'>Plan: </span>{instructions.plan}</p> */}
                        <p className="text-sm"><span className='font-medium'>Date: </span>{date}</p>
                        <p className="text-sm"><span className='font-medium'>Status: </span>{status}</p>
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