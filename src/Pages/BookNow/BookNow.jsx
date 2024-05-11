import Swal from "sweetalert2";
import useAuth from "../../components/Hooks/useAuth";
import { useLoaderData } from "react-router-dom";
import { GoDotFill } from "react-icons/go";




const BookNow = () => {
    const { user } = useAuth() || {};
    const booking = useLoaderData();

    const { _id, service_name, service_image, service_price, name, email } = booking;

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const serviceId = form.serviceId.value;
        const service_name = form.service_name.value;
        const service_price = form.service_price.value;
        const service_image = form.service_image.value;
        const provider_name = form.provider_name.value;
        const provider_email = form.provider_email.value;
        const user_email = user?.email;
        const user_name = user?.displayName;
        const date = form.date.value;
        const instructions = {
            address: form.address.value,
            plan: form.plan.value
        }

        const fitnessBooking = { serviceId, service_name, service_image, service_price, user_email, user_name, instructions, date, provider_name, provider_email, status: "pending" };
        console.log(fitnessBooking);

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
        <div className="max-w-screen-xl mx-auto">
            <div className="lg:p-24 md:p-14 p-2 space-y-10 md:mt-14 mt-32">
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
                            <input type="date" name="date" className="grow" placeholder="date" />
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
                                    <input type="text" name="address" className="grow" placeholder="e.g. home address" />
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
                            <input type="text" name="provider_name" className="grow" placeholder="provider_name" defaultValue={name} disabled />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold flex items-center"><GoDotFill /> Provider Email</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="provider_email" className="grow" placeholder="provider_email" defaultValue={email} disabled />
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