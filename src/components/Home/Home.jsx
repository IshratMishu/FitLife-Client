import { ScrollRestoration } from "react-router-dom";
import Banner from "../Banner/Banner";



const Home = () => {
    return (
        <div>
           <ScrollRestoration />
           <Banner></Banner>
        </div>
    );
};

export default Home;