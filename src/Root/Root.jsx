import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div className='font-poppins'>
            <Navbar></Navbar>
            <ToastContainer />
            <ScrollRestoration/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;