import { FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";


const Footer = () => {
    return (
        <footer className="p-10 text-base-content font-poppins mt-28">
            <div className="footer md:flex md:justify-between max-w-6xl mx-auto">
                <aside>
                    <p className="text-4xl font-bold">ClayPottery</p>
                    <p>Providing home decor pottery since 1992</p>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <a className="link link-hover">info@pottery.com</a>
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
            <footer className="footer footer-center px-10 py-4 mt-5 text-base-content">
                <nav>
                    <h6 className="footer-title">Follow Us On</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/"> <ImFacebook2 className="h-8 w-8" /></a>
                        <a href="https://www.x.com/"> <FaTwitter className="h-8 w-8" /></a>
                        <a href="https://www.instagram.com/"> <FaInstagramSquare className="h-8 w-8" /></a>
                    </div>
                </nav>
            </footer>
        </footer>
    );
};

export default Footer;