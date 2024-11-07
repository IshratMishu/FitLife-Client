import { Helmet } from "react-helmet";
import img from '../../assets/wer.jpg'
import { SiAdobecreativecloud } from "react-icons/si";
import { GiBurningPassion } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import 'animate.css';

const About = () => {
    return (
        <div className="mt-16 max-w-screen-2xl mx-auto">
            <Helmet>
                <title>About - FitLife</title>
            </Helmet>
            <div className="h-96 bg-cover" style={{ backgroundImage: `linear-gradient(rgba(73, 94, 87, 0.5), rgba(73, 94, 87, 0.3)), url(${img})` }}>
                <div className="text-center pt-32 text-[#F5F7F8]">
                    <h1 className="font-semibold text-2xl">OUR STORY</h1>
                    <p className="font-medium animate__animated animate__fadeInLeft">We do things a bit differently, and that’s the way we like it!</p>
                </div>
            </div>

            <div className="space-y-7 p-12">
                <h2 className="text-2xl font-semibold">The Purpose</h2>
                <p>The early purpose of People House was a simple idea: give people a place to connect meaningfully with each other. From its earliest days People House was intended to build and foster strong, loving communities. The primary action of that intention was to offer holistic education, rooted in an approach that “. . .truth lies within,” and each individual is capable of becoming aware of their truth through a natural unfolding of creative abilities when supported by a loving community. What People House offered was opportunities to explore those creative abilities, providing those with interest the space and support to make personal choices for learning, healing, and growth. Since 1977, People House has been known as “a center for personal and spiritual growth,” and each individual and program fostered by the organization has had a strong conviction in the human ability to find healing, truth, transformation, and peace through the practice of self-acceptance, personal responsibility, love and compassion for one’s self, all of which allow for far-reaching love and compassion for others and the world.</p>

                <p>Our services all focus on the holistic integration of mind, body, and spirit, and include mental health counseling, education on holistic care practices, and an inclusive, nonsectarian spiritual community. We uphold a philosophy of care that recognizes the mind/body/spirit connection and strive to create a safe space where everyone is accepted and encouraged to be wholly authentic. We advocate for living a life of conscious awareness and responsibility, while acknowledging that we are each constantly progressing along the path and will all need help somewhere along the way.</p>
            </div>

            <div className="flex md:flex-row flex-col justify-around mt-20 text-2xl px-8 gap-20 md:gap-0">
                <div className="flex flex-col items-center gap-3">
                    <SiAdobecreativecloud className="text-4xl" />
                    <p>WE’RE CREATIVE</p>
                </div>

                <div className="flex flex-col items-center  gap-3">
                    <GiBurningPassion className="text-4xl" />
                    <p>WE’RE PASSIONATE</p>
                </div>

                <div className="flex flex-col items-center  gap-3">
                    <FaHandsHelping className="text-4xl" />
                    <p>WE’RE HERE TO HELP</p>
                </div>
            </div>

        </div>
    );
};

export default About;