import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../Hooks/useAuth";

const EditProfile = () => {
    const { user, updateUserProfile, setReload } = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        photoURL: ""
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.displayName || "",
                email: user.email || "",
                photoURL: user.photoURL || ""
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update user's profile information
        updateUserProfile(formData.name, formData.photoURL)
            .then(() => {
                setReload(true);
                toast.success('Profile Updated Successfully!', {
                    autoClose: 1000
                });
                navigate("/");
            })
    };

    return (
        <div className="group mx-auto flex w-full max-w-xl border border-[#495E57] rounded shadow-lg mt-36">
            <Helmet>
                <title>Edit Profile - FitLife</title>
            </Helmet>
            <div className="relative hidden min-h-[110%] w-1/3 overflow-hidden bg-[#495E57] sm:block">
                <h1 className="absolute bottom-3 right-3 text-right text-xl font-semibold text-[#F5F7F8]">
                    Hey! <br />You can <br /> Update  <br />  Your
                    Profile
                </h1>
                <span className="absolute -left-8 -top-8 z-20 h-32 w-32 rounded-full bg-[#F4CE14] duration-500 group-hover:h-56 group-hover:w-56"></span>
                <span className="absolute -left-5 -top-5 z-10 h-36 w-36 rounded-full bg-[#F5F7F8]"></span>
            </div>
            <form className="flex-1 p-8" onSubmit={handleSubmit}>

                <div className="space-y-5">
                    <div className="text-sm">
                        <label>
                            Name
                        </label>
                        <input
                            className="block w-full rounded-md border border-[#F4CE14] p-2.5 shadow-lg outline-none"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="text-sm">
                        <label  >
                            Email
                        </label>
                        <input
                            className="block w-full rounded-md border border-[#F4CE14] p-2.5 shadow-lg outline-none"
                            type="email"
                            name="email"
                            value={formData.email}
                            disabled
                        />
                    </div>
                    <div className="text-sm">
                        <label>
                            Photo URL
                        </label>
                        <input
                            className="block w-full rounded-md border border-[#F4CE14] p-2.5 shadow-lg outline-none"
                            type="text"
                            name="photoURL"
                            value={formData.photoURL}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-3 mt-5 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14] bg-[#495E57]"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfile;