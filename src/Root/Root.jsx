import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className='font-poppins'>
            <div className="max-w-6xl mx-auto">
                <Navbar></Navbar>
                <ToastContainer />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;