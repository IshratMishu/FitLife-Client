import { Swiper } from "swiper/react";
import "swiper/css";
import { Link } from 'react-router-dom';
import video33 from '../../assets/7877154-uhd_4096_2160_25fps.mp4';

const Banner = () => {
    return (
        <div className="relative lg:h-[600px] mt-16 text-white">
            <video autoPlay loop muted className="absolute object-cover w-full h-full">
                <source src={video33} type="video/mp4"/>
            </video>
            <Swiper className="mySwiper">
                        <div className="p-2 md:p-36 mx-auto lg:mx-16">
                            <p className="text-[30px] lg:text-[40px] md:text-[32px] font-bold text-center">
                            Your Journey to Optimal Health Starts Here
                            </p>
                            <div className="flex justify-center">
                                <Link to='/'><button className="bg-[#495E57] py-2 mt-5 px-3 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Book Now</button></Link>
                            </div>
                        </div>              
            </Swiper>
        </div>
    );
};

export default Banner;

