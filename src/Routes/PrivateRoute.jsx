import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useAuth from "../components/Hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg mt-28 ml-40 lg:ml-[550px] md:ml-96"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location?.pathname || '/'} to='/login' ></Navigate>;

}

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}