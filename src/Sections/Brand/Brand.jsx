import brand1 from '../../assets/brand-1.png'
import brand2 from '../../assets/brand-2.png'
import brand3 from '../../assets/brand-3.png'
import brand4 from '../../assets/brand-4.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Brand = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="mt-16 lg:mt-32 max-w-screen-xl mx-auto flex lg:flex-row flex-col items-center justify-around gap-5" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <h1 className='text-2xl'>Accepted <span className='font-medium'>Insurances</span></h1>
            <img src={brand1} alt="company" className='w-32 h-16 border p-2 hover:border-[#F4CE14]' />
            <img src={brand2} alt="company" className='w-32 h-16 border p-2 hover:border-[#F4CE14]' />
            <img src={brand3} alt="company" className='w-32 h-16 border p-2 hover:border-[#F4CE14]' />
            <img src={brand4} alt="company" className='w-32 h-16 border p-2 hover:border-[#F4CE14]' />
        </div>
    );
};

export default Brand;