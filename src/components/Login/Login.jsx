import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../components/Hooks/useAuth";
import loginLogo from '../../assets/pexels-cliff-booth-4058411.jpg';
import { Helmet } from "react-helmet";


const Login = () => {
    const { signInUser, googleLogin } = useAuth();
    const [credentials, setCredentials] = useState("");

    // hook form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    // navigation systems
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || "/";

    // Function to handle social login
    const handleSocialLogin = socialLoginProvider => {
        socialLoginProvider()
            .then(result => {
                if (result.user) {
                    toast.success('Login Successful!', {
                        autoClose: 2000
                    });
                    navigate(from);
                }
            })
    }


    // Function to handle form submission
    const onLogin = data => {
        const { email, password } = data;

        signInUser(email, password)
            .then((result) => {
                if (result.user) {
                    toast.success('Login Successful!', {
                        autoClose: 2000
                    });
                    navigate(from);
                }
            })
            .catch(() => {
                setCredentials('Invalid Credentials! Please try again.');
            })
    }


    return (
        <div className="hero min-h-screen mt-20 mb-14" style={{ backgroundImage: `url(${loginLogo})` }}>
             <Helmet>
                <title>Login - FlexiCare</title>
            </Helmet>
            <div className="hero-content w-full flex flex-col bg-[#495E57] bg-opacity-55">
                <h1 className="text-3xl font-bold text-white text-center">Welcome Back!</h1>
                <div className="card  bg-[#495E57] bg-opacity-40 w-full max-w-sm shadow-md shadow-gray-400">
                    <form className="card-body" onSubmit={handleSubmit(onLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-700">This field is required</span>}
                            <label className="label">
                                <a href="#" className="text-white link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button onClick={() => handleSocialLogin} className="bg-[#495E57] py-2  px-3 rounded text-white font-semibold hover:bg-[#F4CE14] border" >Login</button>
                        </div>
                        {
                            credentials && <small className="text-red-700">{credentials}</small>
                        }
                        <div className="card-text">
                            <p className="text-white">New here? <Link to="/registration"><button className="bg-[#495E57] md:mt-4 px-3 rounded text-white text-sm md:text-base md:font-semibold hover:bg-[#F4CE14] border">Create an Account</button></Link></p>
                        </div>
                    </form>
                </div>

                <div className="divider text-white">or</div>

                <div className="flex items-center gap-5 justify-center border bg-[#495E57] py-2 px-3 rounded text-white font-semibold hover:bg-[#F4CE14] w-auto md:w-1/2"
                    onClick={() => handleSocialLogin(googleLogin)}>
                    <FaGoogle />
                    <p>Continue With Google</p>
                </div>
            </div>
        </div>
    );
};

export default Login;