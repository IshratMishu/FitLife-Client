import { Link, NavLink } from "react-router-dom";
import useAuth from "../../components/Hooks/useAuth";
import logo from '../../assets/Blue_Modern_Domain_Registrar_Business_Company_Logo-removebg-preview.png'

const Navbar = () => {
    const { logOut, user } = useAuth();

    const linkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "" : "",
            background: isActive ? "none" : "none",
            fontSize: isActive ? "18px" : "18px"
        };
    };


    const links = <>
        <li><NavLink to='/' style={linkStyle}>Home</NavLink></li>
        <li><NavLink to='/s' style={linkStyle}>Services</NavLink></li>
        <li>
            <details>
                <summary>
                    Dashboard
                </summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                    <li><NavLink to='/' style={linkStyle}>Add Service</NavLink></li>
                    <li><NavLink to='/' style={linkStyle}>Manage Service</NavLink></li>
                    <li><NavLink to='/' style={linkStyle}>Booked-Services</NavLink></li>
                    <li><NavLink to='/' style={linkStyle}>Service-To-Do</NavLink></li>
                </ul>
            </details>
        </li>
    </>

    const link2 = <>
        <li><NavLink to='/' style={linkStyle}>Home</NavLink></li>
        <li><NavLink to='/' style={linkStyle}>Services</NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10 p-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            user ?
                                links
                                :
                                link2
                        }
                    </ul>
                </div>
               
                 <Link to='/'><img className="h-12 md:h-16 lg:ml-3 ml-0" src={logo} alt="logo" /></Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        user ?
                            links
                            :
                            link2
                    }
                </ul>
            </div>

            <div className="navbar-end flex gap-2 ">
        
          <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox" value="dark" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
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
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <Link to="/login"><button className="bg-[#495E57] py-2 px-3 rounded text-[#F5F7F8] font-semibold hover:bg-[#F4CE14]">Login</button></Link>
                }
            </div >
        </div >
    );
};

export default Navbar;