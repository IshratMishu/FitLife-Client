import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/log.png'
import { AiFillFacebook } from "react-icons/ai";
import useAos from "../Hooks/useAos";


const Footer = () => {
    useAos({ anchorPlacement: 'center-center' });

    return (
        <footer className="p-10 text-[#F5F7F8] font-poppins mt-28 border-t bg-[#495E57]" data-aos="fade-up">
            <div className="footer md:flex md:justify-between max-w-6xl mx-auto">
                <aside>
                    <img className="h-16" src={logo} alt="" />
                    <p>Providing fitness consultations since 2024</p>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">info@fitness.com</a>
                    <a className="link link-hover">(212) 555-1234</a>
                    <a className="link link-hover">123 Main Street, New York City, NY 10001</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Free Guides</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
            </div>
            <footer className="footer footer-center px-10 py-4 mt-5 text-[#F5F7F8]">
                <nav>
                    <h6 className="footer-title">Follow Us On</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/"> <AiFillFacebook className="h-8 w-8" /></a>
                        <a href="https://www.linkedin.com/"> <FaLinkedin className="h-8 w-8" /></a>
                        <a href="https://www.instagram.com/"> <FaInstagramSquare className="h-8 w-8" /></a>
                    </div>
                </nav>
            </footer>
        </footer>
    );
};

export default Footer;