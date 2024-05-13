import Swal from "sweetalert2";
import useAuth from "../../components/Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { Helmet } from "react-helmet";


const BookNow = () => {
    const { user } = useAuth() || {};
    const booking = useLoaderData();

    const { _id, service_name, service_image, service_price, providerName, providerEmail } = booking;

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const serviceId = form.serviceId.value;
        const service_name = form.service_name.value;
        const service_price = form.service_price.value;
        const service_image = form.service_image.value;
        const providerName = form.providerName.value;
        const providerEmail = form.providerEmail.value;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const date = form.date.value;
        const instructions = {
            address: form.address.value,
            plan: form.plan.value
        }

        const fitnessBooking = { serviceId, service_name, service_image, service_price, user_email, user_name, instructions, date, providerName, providerEmail, status: "pending" };

        // send data to the server
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(fitnessBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your booking successful',
                        icon: 'success',
                        confirmButtonColor: "#495E57",
                        confirmButtonText: 'Okay'
                    })
                }
            })
        form.reset();
    }


    return (
        <div className="mt-24 max-w-screen-md mx-auto">
            <Helmet>
                <title>Booking Form - FlexiCare</title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-2xl font-bold">Booking Form</h1>
                <p className="text-sm font-medium text-balance">Booking with us is simple and easy. Just fill in the booking form below <br /> and hit the purchase button.</p>
            </div>
            <div className="divider w-56 mx-auto mb-2"></div>
            <div className="md:px-10 md:py-5 p-2 space-y-10 rounded-xl m-4 bg-[#495E57] bg-opacity-85">
                <form className="space-y-5" onSubmit={handleBooking}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill />Service Id</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="serviceId" className="grow" placeholder="service_id" defaultValue={_id} disabled />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill />Service Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_name" className="grow" placeholder="service_name" defaultValue={service_name} disabled />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill />Service Image</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_image" className="grow" placeholder="image url" defaultValue={service_image} disabled />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill />Price</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_price" className="grow" placeholder="price" defaultValue={service_price} disabled />
                        </label>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill />Date</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="date" name="date" className="grow" placeholder="date" required />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Special Instructions</span>
                        </label>
                        <div className="md:flex gap-4">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold flex items-center"><GoDotFill />Your Address</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="address" className="grow" placeholder="e.g. home address" required />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-bold flex items-center"><GoDotFill />Customized Service Plan</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name="plan" className="grow" placeholder="e.g. specific exercises" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill /> Provider Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="providerName" className="grow" placeholder="provider_name" defaultValue={providerName} disabled />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill /> Provider Email</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="providerEmail" className="grow" placeholder="provider_email" defaultValue={providerEmail} disabled />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill /> User Email</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="user_email" className="grow" placeholder="user_email" defaultValue={user?.email} disabled />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill /> User Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="user_name" className="grow" placeholder="user_name" defaultValue={user?.displayName} disabled />
                        </label>
                    </div>
                    <input type="submit" value="Purchase" className="bg-[#495E57] btn btn-block py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#F4CE14]" />
                </form>
            </div>
        </div>
    );
};

export default BookNow;