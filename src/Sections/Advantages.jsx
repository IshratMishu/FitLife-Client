import { BsBookmarkCheck } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { MdFitnessCenter } from "react-icons/md";
import { RiPsychotherapyFill } from "react-icons/ri";


const Advantages = () => {
    return (
        <div className="mt-24 max-w-screen-xl mx-auto">
            <h1 className="ml-5 text-2xl font-semibold">Our <span className="text-3xl">Advantages</span></h1>
            <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex items-center gap-2 border p-4  hover:bg-[#495E57] hover:text-white shadow-md">
                    <MdFitnessCenter className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div>
                        <h1 className="font-bold">Personalized Fitness Plan</h1>
                        <p className="text-sm">You will receive a full individualized fitness plan</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  hover:bg-[#495E57] hover:text-white shadow-md">
                    <FaGraduationCap className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div>
                        <h1 className="font-bold">Experience Staff</h1>
                        <p className="text-sm">Our therapists are trained and certified in therapy technique</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  hover:bg-[#495E57] hover:text-white shadow-md">
                    <LiaNotesMedicalSolid className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Therapy Goals</h1>
                        <p className="text-sm">Setting goals is the best way to enjoy a successful outcome</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  hover:bg-[#495E57] hover:text-white shadow-md">
                    <RiPsychotherapyFill className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Licensed Therapists</h1>
                        <p className="text-sm">Your treatment will be performed by only licensed therapists</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  hover:bg-[#495E57] hover:text-white shadow-md">
                    <IoFitness className="w-14 h-20 rounded-2xl text-[#F4CE14]" />
                    <div >
                        <h1 className="font-bold">Tailored Fitness Solutions</h1>
                        <p className="text-sm">Say hello to a regimen meticulously crafted for your body, goals, and lifestyle.</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 border p-4  hover:bg-[#495E57] hover:text-white shadow-md">
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