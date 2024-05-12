import PropTypes from 'prop-types';

const SingleBookedService = ({singleBooked}) => {
    const { serviceId, service_name, service_image, service_price, user_email, user_name, instructions, date, providerName, providerEmail, status } = singleBooked;


    return (
        <div>
            <div className="card md:card-side bg-base-100 shadow-xl lg:m-5 m-2">
                <figure className="lg:p-10 p-2">
                    <img className="rounded-xl h-52" src={service_image} alt="fitness" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{service_name}</h2>
                    <p>{serviceId}</p>
                    <div className='flex items-center gap-2'>
                        <p>{providerName}</p>
                        <p>{providerEmail}</p>
                    </div>
                  <p>{service_price}</p>
                  <p>{ user_email}</p>
                  <p>{ user_name}</p>
                  <p>{instructions.address}</p>
                  <p>{instructions.plan}</p>
                  <p>{date}</p>
                  <p>{status}</p>
                </div>
            </div>
        </div>
    );
};
export default SingleBookedService;

SingleBookedService.propTypes = {
    singleBooked: PropTypes.object
}