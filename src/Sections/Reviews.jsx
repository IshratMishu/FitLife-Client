import bg from '../assets/pexels-cesar-galeao-1673528-3253501.jpg';
import img1 from '../assets/1.avif';
import img2 from '../assets/2.avif';
import img3 from '../assets/3.avif';
import {Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { IoIosStar } from 'react-icons/io';


const Reviews = () => {
    return (
        <div className="md:h-[500px] h-[100px] md:mt-28 mt-20" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
            <Swiper
                fadeEffect={{ crossFade: true }}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay,  Pagination]}
                className="mySwiper max-w-screen-xl"
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <div className=" bg-white w-auto md:w-2/3 lg:w-2/5 p-4 md:p-12 space-y-4 mt-0 md:mt-48 border-b-2 border-[#F4CE14]">
                       <h1 className='text-2xl font-semibold'>Reviews From Our Clients</h1>
                       <div className='flex flex-row text-[#F4CE14]'>
                       <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                       </div>
                       <p className='text-sm'>The fitness course has completely changed my fitness routine. The variety of classes available, from cycling to yoga, keeps me engaged and motivated. The only downside is the initial cost of the bike or treadmill, but for me, it is been worth every penny.</p>
                       <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src={img1} alt="" />
                            <div>
                                <h1 className='font-bold'>Michael Frid</h1>
                                <p>Mumfit Athlete</p>
                            </div>
                       </div>
                    </div>
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                <div className=" bg-white w-auto md:w-2/3 lg:w-2/5 p-4 md:p-12 space-y-4 mt-0 md:mt-48 border-b-2 border-[#F4CE14]">
                       <h1 className='text-2xl font-semibold'>Reviews From Our Clients</h1>
                       <div className='flex flex-row text-[#F4CE14]'>
                       <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                       </div>
                       <p className='text-sm'>The personalized workouts and guided programs are great for targeting specific goals, and the sleep tracking feature has really helped me improve my sleep quality. However, I wish there were more variety in the workouts, especially for strength training.</p>
                       <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src={img2} alt="" />
                            <div>
                                <h1 className='font-bold'>Rodrugauz Frok</h1>
                                <p>Swimmer</p>
                            </div>
                       </div>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                <div className=" bg-white w-auto md:w-2/3 lg:w-2/5 p-4 md:p-12 space-y-4 mt-0 md:mt-48 border-b-2 border-[#F4CE14]">
                       <h1 className='text-2xl font-semibold'>Reviews From Our Clients</h1>
                       <div className='flex flex-row text-[#F4CE14]'>
                       <IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar /><IoIosStar />
                       </div>
                       <p className='text-sm'>This website courses are fantastic for anyone looking for free, high-quality workouts. They offer a wide range of workouts for all fitness levels. I love that I can access it anytime, anywhere, without needing any equipment. Its like having a personal trainer in my pocket!</p>
                       <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src={img3} alt="" />
                            <div>
                                <h1 className='font-bold'>Allice Moris</h1>
                                <p>Fitness Gem</p>
                            </div>
                       </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Reviews;