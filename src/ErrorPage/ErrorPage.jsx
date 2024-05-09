import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="font-poppins text-center p-5 m-10 md:p-20 md:m-20 space-y-5">
            {/* <Helmet>
                <title>LuxVista - 404! Error</title>
            </Helmet> */}
            <h2 className="font-bold text-6xl">Oops!</h2>
            <p className="font-bold text-xl"> Page Not Found☹️</p>
            <Link to='/'><button className="btn bg-[#81c784] text-black font-bold text-lg mt-5">Go Back to Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;