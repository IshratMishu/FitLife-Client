import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../components/Hooks/useAuth";

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
        <div className="hero min-h-screen bg-base-100 mt-28 mb-14">
            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#81c784]">Great to have you back!</h1>

                    <div className="flex items-center gap-10 justify-center border bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]"
                        onClick={() => handleSocialLogin(googleLogin)}>
                        <FaGoogle />
                        <p>Continue With Google</p>
                    </div>
                </div>

                <div className="divider">or</div>

                <div className="card shrink-0 w-full max-w-sm shadow-md shadow-gray-400 bg-[#81c784]">
                    <form className="card-body" onSubmit={handleSubmit(onLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-black">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-[#FF497C]">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-black">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                            {errors.password && <span className="text-[#FF497C]">This field is required</span>}
                            <label className="label">
                                <a href="#" className="text-black link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={() => handleSocialLogin} className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]" >Login</button>
                        </div>
                        {
                            credentials && <small className="text-[#FF497C]">{credentials}</small>
                        }
                        <div className="card-text">
                            <p className="text-black">New here? <Link to="/registration"><button className="bg-[#FF497C] py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#988087]">Create an Account</button></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;