import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useAuth from "../../components/Hooks/useAuth";
import Swal from 'sweetalert2'


const Registration = () => {
    const { createUser, updateUserProfile, setReload } = useAuth();
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


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
                        navigate("/");
                    });
            });
    };


    return (
        <div className="hero min-h-screen bg-base-100 mt-28 mb-14">

            <div className="hero-content flex flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-[#81c784]">Register for Free!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-md shadow-gray-400 bg-[#81c784] mt-5">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-black">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className="text-[#FF497C]">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-black">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className="text-[#FF497C]">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-black">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" className="input input-bordered" {...register("photo", { required: true })} />
                            {errors.photo && <span className="text-[#FF497C]">This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="text-black">Password</span>
                            </label>
                            <input type={showPassword ? "text" : "password"}
                                placeholder="password"
                                className="input input-bordered \"
                                {...register("password", { required: true })} />
                            <span className="absolute top-12 right-5" onClick={() => { setShowPassword(!showPassword) }}>
                                {
                                    showPassword ? <IoEye /> : <IoEyeOff />
                                }
                            </span>
                            {errors.password && <span className="text-[#FF497C]">This field is required</span>}
                            {
                                passwordError && <small className="text-[#FF497C]">{passwordError}</small>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="text-lg bg-[#FF497C] py-2 px-3 rounded text-white font-semibold hover:bg-[#988087]">Register</button>
                        </div>
                        <p className="p-2 text-black">Already have an Account? <Link to="/login"><button className="bg-[#FF497C] py-2 px-3 rounded text-white font-semibold hover:bg-[#988087]">Please Login</button></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;