import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";


const Root = () => {
    const [showLoading, setShowLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (showLoading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                fontSize: '40px',
                color: '#495E57',
                fontWeight: 'bold'
            }}>
                FitLife is Loading <span className="loading loading-ring loading-lg"></span>  <span className="loading loading-ring loading-md"></span> <span className="loading loading-ring loading-sm"></span>
            </div>
        );
    }

    return (
        <div className='font-poppins'>
            <Navbar></Navbar>
            <ToastContainer />
            <ScrollRestoration />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;