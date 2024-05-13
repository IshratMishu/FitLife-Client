import Swal from "sweetalert2";
import useAuth from "../../components/Hooks/useAuth";
import { Helmet } from "react-helmet";
import fit from '../../assets/wer.jpg'

const AddService = () => {
    const { user } = useAuth() || {};


    const handleAddService = e => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_price = form.service_price.value;
        const service_image = form.service_image.value;
        const service_area = form.service_area.value;
        const service_description = form.service_description.value;
        const providerEmail = user?.email;
        const providerName = user?.displayName;
        const providerImage = user?.photoURL;

        const newFitness = { service_name, service_image, service_price, providerImage, service_area, service_description, providerEmail, providerName};

        // send data to the server
        fetch('http://localhost:5000/fitness', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFitness)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your service added successfully',
                        icon: 'success',
                        confirmButtonColor: "#495E57",
                        confirmButtonText: 'Okay'
                    })
                }
            })
        form.reset();
    }


    return (
          <div className="lg:p-24 p-2 space-y-5 bg-cover" style={{backgroundImage: `url(${fit})`}}>
             <Helmet>
                <title>Add Service - FlexiCare</title>
            </Helmet>
        <div className="shadow-md bg-[#495E57] bg-opacity-65 lg:mt-2 mt-20 rounded-xl md:p-10 p-3 max-w-screen-xl mx-auto" >
            <h2 className="text-3xl font-bold text-center mb-5 md:mb-12 text-white">Add Services Effortlessly: Start Here!</h2>
            <form className="space-y-3" onSubmit={handleAddService}>
                {/* form row 1*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Service Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_name" className="grow" placeholder="service_name" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Image URL</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_image" className="grow" placeholder="image url" required/>
                        </label>
                    </div>
                </div>

                {/* form row 2*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white"> Price</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_price" className="grow" placeholder="price" required/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Area</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="service_area" className="grow" placeholder="area" required/>
                        </label>
                    </div>
                </div>
             
                {/* form row 3*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Description</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="service_description" className="grow" placeholder="description" required/>
                    </label>
                </div>
                {/* form row 4*/}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Provider Email</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="providerEmail" className="grow" placeholder="provider_Email" defaultValue={user?.email} disabled/>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Provider Name</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name="providerName" className="grow" placeholder="provider_Name" defaultValue={user?.displayName} disabled/>
                        </label>
                    </div>
                </div>
                 {/* form row 5*/}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Provider Photo</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="providerPhoto" className="grow" placeholder="provider_Photo" defaultValue={user?.photoURL} disabled/>
                    </label>
                </div>
                <input type="submit" value="Add & Publish" className="bg-[#495E57] btn btn-block py-2 mt-5 px-3 rounded text-white font-semibold hover:bg-[#F4CE14]" />
            </form>
        </div>
    </div>
    );
};

export default AddService;