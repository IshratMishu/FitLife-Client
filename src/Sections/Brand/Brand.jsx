import brand1 from '../../assets/brand-1.png'
import brand2 from '../../assets/brand-2.png'
import brand3 from '../../assets/brand-3.png'
import brand4 from '../../assets/brand-4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Marquee from "react-fast-marquee";

const Brand = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="mt-16 lg:mt-32 max-w-screen-lg mx-auto flex md:flex-row flex-col items-center" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <h1 className='text-xl pl-8'>Accepted <span className='font-medium'>Insurances</span></h1>
            <Marquee>
            <div className="flex lg:gap-20 gap-5 mt-10 md:mt-0">
            <img src={brand1} alt="company" className='w-32 h-16 border p-2 border-[#F4CE14]' />
            <img src={brand2} alt="company" className='w-32 h-16 border p-2 border-[#F4CE14]' />
            <img src={brand3} alt="company" className='w-32 h-16 border p-2 border-[#F4CE14]' />
            <img src={brand4} alt="company" className='w-32 h-16 border p-2 border-[#F4CE14]' />
            </div>
            </Marquee>
        </div>
    );
};

export default Brand;