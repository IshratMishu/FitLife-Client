import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Bmi = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    const [openModal, setOpenModal] = useState(false);
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);


    const calculateBmi = (e) => {
        e.preventDefault();
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2);
            setBmi(bmiValue);
            setOpenModal(true);
        }
    };

    return (
        <div className="mt-80 md:mt-32 border-y bg-[#495E57] text-[#F5F7F8]" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
            <div className="flex lg:flex-row flex-col items-center max-w-screen-lg mx-auto px-6 py-8 lg:py-0">
                <div className="space-y-5">
                    <h2 className="text-xl font-semibold text-center lg:text-start">Body Mass index</h2>
                    <p className="text-balance text-sm">Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.</p>
                    <ul>
                        <li className="flex items-center gap-1"><FaArrowRightLong className="text-[#F4CE14]" />18-25 – Normal Weight</li>
                        <li className="flex items-center gap-1"><FaArrowRightLong className="text-[#F4CE14]" />25-30 – Overweight</li>
                        <li className="flex items-center gap-1"><FaArrowRightLong className="text-[#F4CE14]" />30-40 – Obesity</li>
                        <li className="flex items-center gap-1"><FaArrowRightLong className="text-[#F4CE14]" />Above 40 – Morbid Obesity</li>
                    </ul>
                </div>


                <div className="w-full py-10 lg:w-[60%]">
                    <form className="space-y-6" onSubmit={calculateBmi}>
                        <div className="space-y-2 text-sm">
                            <label className="block font-medium">Your Height (cm)</label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border-2 px-3 py-2 text-sm focus:border-[#F4CE14] focus-visible:outline-none hover:border-[#F4CE14] text-[#495E57]"
                                placeholder="Your Height (cm)"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="block font-medium">Your Weight (kg)</label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border-2 px-3 py-2 text-sm focus:border-[#F4CE14] focus-visible:outline-none hover:border-[#F4CE14] text-[#495E57]"
                                placeholder="Your Weight (kg)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="w-full py-2 px-3 mt-5 rounded text-[#F5F7F8] font-semibold bg-[#F4CE14]">
                            Calculate Your BMI
                        </button>
                    </form>
                </div>
            </div>

            {openModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#495E57] bg-opacity-50">
                    <div className="bg-[#495E57] border border-[#F4CE14] px-20 py-10 rounded text-center space-y-4">
                        <h2 className="text-lg font-semibold text-[#F5F7F8]">Your BMI is:</h2>
                        <p className="text-2xl font-bold text-[#F5F7F8]">{bmi}</p>
                        <button
                            onClick={() => setOpenModal(false)}
                            className="mt-4 px-4 py-2 bg-[#F4CE14] text-[#F5F7F8] rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Bmi;