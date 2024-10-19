import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import error from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-cover" style={{backgroundImage: `url(${error})`}}>
             <Helmet>
                <title>404! Error - FitLife</title>
            </Helmet>
            <div className="font-poppins text-center space-y-5">
            <h2 className="font-bold text-white text-6xl pt-28">WHOOPS!</h2>
            <p className="font-bold text-[#F4CE14] text-9xl"> 404</p>
            <Link to='/'><button className="btn bg-[#F4CE14] font-bold text-lg mt-5">Go Back to Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;