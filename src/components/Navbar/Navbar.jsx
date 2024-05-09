import { Link, NavLink } from "react-router-dom";
import useAuth from "../../components/Hooks/useAuth";


const Navbar = () => {
    const { logOut, user } = useAuth();

    const linkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#86efac" : "",
            background: isActive ? "none" : "none",
            fontSize: isActive ? "18px" : "18px"
        };
    };


    const links = <>

        <li><NavLink to='/' style={linkStyle}>Home</NavLink></li>
    </>



    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl md:text-3xl">LuxVista</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="list" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full cursor-pointer">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/31dsFpW/icon-7797704-640.webp'} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                                <li>
                                    <a className="justify-between">{user?.displayName || 'User Name'}</a>
                                </li>
                                <li> <Link to='/updateProfile'>Update Profile</Link> </li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login"><button className="btn btn-primary font-bold">Login</button></Link>
                }
            </div >
        </div >
    );
};

export default Navbar;