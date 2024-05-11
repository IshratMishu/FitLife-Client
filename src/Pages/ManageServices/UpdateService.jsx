import { useLoaderData } from "react-router-dom";
import useAuth from "../../components/Hooks/useAuth";
import Swal from "sweetalert2";

const UpdateService = () => {
    const { user } = useAuth();
    const updateFitness = useLoaderData();
    const { _id, service_name, service_image, service_price, service_area, service_description } = updateFitness;

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_price = form.service_price.value;
        const service_image = form.service_image.value;
        const service_area = form.service_area.value;
        const service_description = form.service_description.value;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;

        const updatingFitness = { service_name, service_image, service_price, image, service_area, service_description, email, name };
       

  // send data to the server
  fetch(`http://localhost:5000/fitnessUpdate/${_id}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(updatingFitness)
})
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Your service updated successfully',
                icon: 'success',
                confirmButtonColor: "#495E57",
                confirmButtonText: 'Okay'
            })
        }
    })


    }

    return (
        <div className="lg:p-24 md:p-14 p-2 space-y-10 md:mt-14 mt-32 max-w-screen-xl mx-auto" >
            <div className="shadow-md rounded-xl md:p-10 p-3" >
                <h2 className="text-3xl font-bold text-center mb-16">Update Your Fitness & Therapeutic Services</h2>
                <form className="space-y-5" onSubmit={handleUpdate}>
                    {/* form row 1*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Service Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="service_name" className="grow" placeholder="service_name" defaultValue={service_name} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Image URL</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="service_image" className="grow" placeholder="image url" defaultValue={service_image} />
                            </label>
                        </div>
                    </div>

                    {/* form row 2*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold"> Price</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="service_price" className="grow" placeholder="price" defaultValue={service_price} />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">Area</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="service_area" className="grow" placeholder="area" defaultValue={service_area} />
                            </label>
                        </div>
                    </div>

                    {/* form row 3*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_description" className="grow" placeholder="description" defaultValue={service_description} />
                        </label>
                    </div>
                    {/* form row 4*/}
                    <div className="md:flex gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">User Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="email" className="grow" placeholder="email" defaultValue={user.email} disabled />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold">User Name</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input type="text" name="name" className="grow" placeholder="name" defaultValue={user.displayName} disabled />
                            </label>
                        </div>
                    </div>
                    {/* form row 5*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">User Photo</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="photo" className="grow" placeholder="your photo" defaultValue={user.photoURL} disabled />
                        </label>
                    </div>
                    <input type="submit" value="Update" className="bg-[#495E57] btn btn-block py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#F4CE14]" />
                </form>
            </div>
        </div>
    );
};

export default UpdateService;