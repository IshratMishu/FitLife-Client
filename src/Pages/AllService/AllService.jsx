import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "./SingleService";


const AllService = () => {
    const [searchText, setSearchText] = useState('');
    const { count } = useLoaderData();
    const itemsPerPage = 5;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
    const [serve, setServe] = useState([]);

    const pages = [];
    for (let i = 0; i < numberOfPages; i++){
        pages.push(i);
    }
    // const pages = [...Array(numberOfPages).keys()];

    useEffect(() => {
        fetch(`http://localhost:5000/fitness?page=${currentPage}&size=${itemsPerPage}&search=${searchText}`)
            .then(res => res.json())
            .then(data => setServe(data))
    }, [currentPage, searchText])


    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        setCurrentPage(0);
    };


    return (
        <div className="mt-28">
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Search services by name..."
                    value={searchText}
                    onChange={handleSearchChange}
                    className="input input-bordered border-2 border-[#F4CE14] w-72 md:w-96 shadow-md mb-3"
                />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 max-w-screen-lg mx-auto">
                {serve.length > 0 ? (
                    serve.map(oneService => (
                        <SingleService key={oneService._id} oneService={oneService} />
                    ))
                ) : (
                    <h2 className="text-center mb-12 mt-12 font-semibold">No Result Found...</h2>
                )}
            </div>
            {
                serve.length > 0 &&
                <div className="flex justify-center gap-2 mt-10">
                    {
                        pages.map(page => <button
                            onClick={() => setCurrentPage(page)}
                            className={`join-item btn ${currentPage === page ? 'bg-[#F4CE14]' : ''}`} key={page}>{page + 1}</button>)
                    }
                </div>
            }
        </div>
    );
};

export default AllService;