import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ViewDetail = () => {
    const {id} = useParams();
    const [fit, setFit] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/fitness/${id}`)
            .then(res => res.json())
            .then(data => {
                setFit(data);
            })
    }, [id]);


    return (
        <div className="mt-20">
            {fit.service_name}
        </div>
    );
};

export default ViewDetail;