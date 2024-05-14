import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useAuth from "../../components/Hooks/useAuth";
import Swal from 'sweetalert2'
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginLogo from '../../assets/pexels-cliff-booth-4058411.jpg';
import { Helmet } from "react-helmet";


const Registration = () => {
    const { createUser, updateUserProfile, setReload, googleLogin } = useAuth();
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const from = location?.state || "/";

    const onSubmit = (data) => {
        const { email, password, name, photo } = data;

        if (!/(?=.*[A-Z])(?=.*[a-z]).{6,}/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), and be at least 6 characters long.');
            return;
        } else {
            Swal.fire({
                title: 'Registration Successful!!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })
        }


        //create user and update profile
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        setReload(true);
                        navigate(from);
                    });
            });
    };

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


    return (
        <div className="hero min-h-screen mt-16 md:mt-20" style={{ backgroundImage: `url(${loginLogo})` }}>
             <Helmet>
                <title>Register - FlexiCare</title>
            </Helmet>
            <div className="md:hero-content md:rounded-none rounded-xl w-72 md:w-full flex flex-col md:bg-[#495E57] md:bg-opacity-55 mb-10">

                <h1 className="text-3xl mt-4 mb-3 font-bold md:text-white text-black text-center">Register for Free!</h1>

                <div className="card  bg-[#495E57] bg-opacity-40 w-72 md:w-full max-w-sm shadow-md shadow-gray-400">
                    <form className="md:card-body p-3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-white">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-red-700">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-white">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                placeholder="password"
                                className="input input-bordered \"
                                {...register("password", { required: true })} />
                            <span className="absolute top-14 right-5" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoEye /> : <IoEyeOff />
                                }
                            </span>
                            {errors.password && <span className="text-red-700">This field is required</span>}
                            {
                                passwordError && <small className="text-red-700">{passwordError}</small>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="text-lg bg-[#495E57] py-2 px-3 border rounded text-white font-semibold hover:bg-[#F4CE14]">Register</button>
                        </div>
                        <p className="p-2 text-white">Already have an Account? <Link to="/login"><button className="bg-[#495E57] px-3 rounded text-white text-sm md:text-base md:font-semibold hover:bg-[#F4CE14] border">Please Login</button></Link></p>
                    </form>
                </div>

                <div className="divider text-black md:text-white">or</div>

                <div className="flex items-center gap-5 justify-center border bg-[#495E57] py-2 px-3 rounded text-white font-semibold hover:bg-[#F4CE14] w-auto md:w-1/2"
                    onClick={() => handleSocialLogin(googleLogin)}>
                    <FaGoogle />
                    <p>Register With Google</p>
                </div>
            </div>
        </div>
    );
};

export default Registration;