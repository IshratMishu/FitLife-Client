// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
// import { FaChartArea } from 'react-icons/fa';
// import { IoIosPricetags } from 'react-icons/io';
// import { Link } from 'react-router-dom';

// const SingleService = ({ oneService }) => {
//     const { _id, service_image, service_name, service_description, service_area, service_price, providerName, providerImage } = oneService;


//     return (
//         <div className='m-5'>
//             <Helmet>
//                 <title>All Services - FitLife</title>
//             </Helmet>
//             <div className="flex bg-[#495E57] text-white shadow-md shadow-[#F4CE14] justify-between rounded-xl p-4 lg:px-20 md:px-10 md:py-5 hover:bg-white hover:text-black ">
//                 <div className="rounded-xl space-y-2">
//                     <img className='w-60 h-32 object-cover rounded-xl block md:hidden' src={service_image} alt="" />
//                     <h2 className="card-title">{service_name}</h2>
//                     <p className='text-balance'>{service_description}</p>
//                     <div className='flex items-center gap-2'>
//                         <h1 className='text-xl font-bold'>By: </h1>
//                         <img className='w-12 h-12 rounded-full' src={providerImage} alt="" />
//                         <p>{providerName}</p>
//                     </div>
//                     <p className='flex items-center gap-1'><FaChartArea /> <span className='font-semibold'>Area:</span> {service_area}</p>
//                     <p className='flex items-center gap-1'><IoIosPricetags /> <span className='font-semibold'>Price:</span> {service_price}</p>
//                     <div className="justify-end flex block md:hidden">
//                         <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white hover:bg-[#495E57]">View Detail</button></Link>
//                     </div>
//                 </div>
//                 <div className='flex flex-col gap-2'>
//                     <img className='w-60 h-32 object-cover rounded-xl hidden md:block' src={service_image} alt="" />
//                     <div className="card-actions hidden md:block">
//                         <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white hover:bg-[#495E57]">View Detail</button></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SingleService;

// SingleService.propTypes = {
//     oneService: PropTypes.object
// }



import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FaChartArea } from 'react-icons/fa';
import { IoIosPricetags } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../components/Provider/AuthFavorite';



const SingleService = ({ oneService }) => {
  const { _id, service_image, service_name, service_description, service_area, service_price, providerName, providerImage } = oneService;
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some(fav => fav._id === _id);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(_id);
    } else {
      addFavorite(_id);
    }
  };

  return (
    <div className='m-5'>
      <Helmet>
        <title>All Services - FitLife</title>
      </Helmet>
      <div className="flex bg-[#495E57] text-white shadow-md shadow-[#F4CE14] justify-between rounded-xl p-4 lg:px-20 md:px-10 md:py-5 hover:bg-white hover:text-black">
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
          <button onClick={handleFavorite} className={`bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold ${isFavorite ? 'text-red-600' : 'text-[#495E57]'} hover:text-white hover:bg-[#495E57]`}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
          <div className="justify-end flex block md:hidden">
            <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white hover:bg-[#495E57]">View Detail</button></Link>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <img className='w-60 h-32 object-cover rounded-xl hidden md:block' src={service_image} alt="" />
          <div className="card-actions hidden md:block">
            <Link to={`/viewDetail/${_id}`}><button className="bg-[#F4CE14] py-2 px-3 rounded text-[#495E57] font-semibold hover:text-white hover:bg-[#495E57]">View Detail</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleService.propTypes = {
  oneService: PropTypes.object
};

export default SingleService;

