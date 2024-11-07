import { BsBookmarkCheck } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { MdFitnessCenter } from "react-icons/md";
import { RiPsychotherapyFill } from "react-icons/ri";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Advantages = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="mt-20 md:mt-32 max-w-screen-xl mx-auto">
            <h1 className="ml-5 text-2xl font-semibold text-center md:text-start">Our <span className="text-3xl">Advantages</span></h1>
            <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex items-center gap-2 border p-4 border-[#495E57] shadow-md" data-aos="flip-left">
                    <MdFitnessCenter className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div>
                        <h1 className="font-bold">Personalized Fitness Plan</h1>
                        <p className="text-sm">You will receive a full individualized fitness plan</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4 border-[#495E57] shadow-md " data-aos="flip-left">
                    <FaGraduationCap className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div>
                        <h1 className="font-bold">Experience Staff</h1>
                        <p className="text-sm">Our therapists are trained and certified in therapy technique</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  border-[#495E57] shadow-md " data-aos="flip-left">
                    <LiaNotesMedicalSolid className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Therapy Goals</h1>
                        <p className="text-sm">Setting goals is the best way to enjoy a successful outcome</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  border-[#495E57] shadow-md " data-aos="flip-left">
                    <RiPsychotherapyFill className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Licensed Therapists</h1>
                        <p className="text-sm">Your treatment will be performed by only licensed therapists</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  border-[#495E57] shadow-md " data-aos="flip-left">
                    <IoFitness className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Tailored Fitness Solutions</h1>
                        <p className="text-sm">Say hello to a regimen meticulously crafted for your body, goals, and lifestyle.</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  border-[#495E57] shadow-md" data-aos="flip-left">
                    <BsBookmarkCheck className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Customized Training Courses</h1>
                        <p className="text-sm">Elevate your fitness game with customized training courses</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Advantages;