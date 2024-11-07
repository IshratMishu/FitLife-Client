import blog1 from '../../assets/physio_005.jpg'
import blog2 from '../../assets/physio_003.jpg'
import blog3 from '../../assets/physio_004.jpg'
import { IoIosArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Blog = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='flex md:flex-row flex-col items-center gap-5 mt-16 lg:mt-32 max-w-screen-xl mx-auto p-8' data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className='space-y-4'>
                <h2 className='text-2xl'>Latest <span className='font-medium'>News and Research</span></h2>
                <p className='text-sm'>Find out the latest news about our Physiotherapy Clinic and information about all your Physiotherapy and health related needs.</p>
                <p className='text-sm'>We are always happy to hear what you have to say so be sure to leave a comment.</p>
                <button className="bg-[#495E57] py-2 px-3 mt-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14] border border-[#F4CE14]">Read All News</button>
            </div>
            <div className='space-y-2 border border-[#F4CE14]'>
                <img src={blog1} alt="" />
                <h4 className='font-semibold p-2'>Identifying And Treating Pain From Nerve Tension</h4>
                <p className='text-sm p-2'>Nerve tension is pain that occurs because a nerve is being compressed or stuck in its surrounding tissue which prevents it…</p>
                <h3 className='flex items-center p-2 font-semibold text-[#F4CE14]'>Read Post<IoIosArrowForward /></h3>
            </div>
            <div className='space-y-2 border border-[#F4CE14]'>
                <img src={blog2} alt="" />
                <h4 className='font-semibold p-2'>Identifying And Treating Pain From Nerve Tension</h4>
                <p className='text-sm p-2'>Nerve tension is pain that occurs because a nerve is being compressed or stuck in its surrounding tissue which prevents it…</p>
                <h3 className='flex items-center p-2 font-semibold text-[#F4CE14]'>Read Post<IoIosArrowForward /></h3>
            </div>
            <div className='space-y-2 border border-[#F4CE14]'>
                <img src={blog3} alt="" />
                <h4 className='font-semibold p-2'>Identifying And Treating Pain From Nerve Tension</h4>
                <p className='text-sm p-2'>Nerve tension is pain that occurs because a nerve is being compressed or stuck in its surrounding tissue which prevents it…</p>
                <h3 className='flex items-center p-2 font-semibold text-[#F4CE14]'>Read Post<IoIosArrowForward /></h3>
            </div>
        </div>
    );
};

export default Blog;