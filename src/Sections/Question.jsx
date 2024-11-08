import { useState } from 'react';
import ques from '../assets/g.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import CountUp from 'react-countup';

const Question = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const dataArr = [{ title: 'Can I add my own services to the platform?', description: 'Yes! Registered users can add their own services by navigating to the Add Services page.' }, { title: 'How does the booking process work?', description: 'You can book any service provided by other users. Once booked, the service status will initially be Pending. If service provider update the status to Working or Completed, you can see on Booked Services page.' }, { title: 'How can I change my profile details?', description: 'To update your profile picture or name, go to the Edit Profile page, where you can make these changes quickly and easily.' }];

    // toggle state and function
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };


    return (
        <div className='flex lg:justify-between justify-center items-center mt-20 lg:mt-32 max-w-screen-lg mx-auto px-8' data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom">
            <div >
                <h1 className='text-2xl mb-6 md:mb-3 text-center lg:text-start'>Frequently <span className='font-medium'> Asked <br />Questions</span></h1>
                <div className="flex w-full justify-center">
                    <div className="max-w-[550px] cursor-pointer space-y-6">
                        {/* mapping each accordion  */}
                        {dataArr.map((data, idx) => (
                            <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                                {/* the index div  */}
                                <div className="flex size-16 select-none items-center justify-center rounded-md bg-[#495E57] text-2xl font-semibold text-white">
                                    <span>0{idx + 1}</span>
                                </div>

                                <div className="relative h-[2px] w-10 bg-[#495E57]">
                                    <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#495E57] bg-[#F4CE14]"></span>
                                    <span className="h-1 w-10 bg-[#495E57]"></span>
                                    <span
                                        className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-[#495E57] bg-[#F4CE14] delay-100' : 'border-transparent'}`}
                                    ></span>
                                </div>

                                {/* main accordion div  */}
                                <div className="text-center">
                                    <div className="relative max-w-[450px] border-t-[12px] border-[#F4CE14] bg-[#495E57] p-3 shadow-md">
                                        <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#F4CE14]"></span>
                                        <h1 className="select-none text-lg text-white text-start">{data.title}</h1>
                                    </div>
                                    <div className={`grid overflow-hidden text-white transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                        <div className="overflow-hidden">
                                            <div className="max-w-[450px] bg-[#495E57] p-4 text-sm text-white text-balance">{data.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className='w-80 object-cover rounded lg:block hidden' src={ques} alt="" />
                <div className='bg-[#F4CE14] p-4 w-40 text-[#495E57] border border-white rounded absolute bottom-2 -left-12 lg:block hidden'>
                    <h6>Clients <br />
                        <span className='text-3xl font-semibold'>
                            <CountUp start={0} end={250} duration={1} suffix="+" enableScrollSpy={true} />
                        </span>
                    </h6>
                    <p className='text-sm'>achieving fitness <br /> goals.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;