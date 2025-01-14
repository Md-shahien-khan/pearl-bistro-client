import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
    // getting create user from authContext
    const {user, logOut} = useContext(AuthContext);
    const [cart] = useCart();
    
    // handle logout
    const handleLogOut = () =>{
        logOut()
            .then(() =>{})
            .catch(error => {
                console.log(error);
            })
    };

    // nav links
    const navOptions = 
            <div className="flex flex-col lg:flex-row items-center justify-center text-yellow-400 font-bold lg:text-xl">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/order/salad'>Order</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/secret'>Secret</Link></li>
            <li>
                <Link to='/dashboard/cart'>
                <button className="btn bg-stone-700">
                <FaShoppingCart  className="text-yellow-500 text-xl"/>
                <div className="badge badge-secondary">+{cart.length}</div>
                </button>
                </Link>
            </li>
            {
                user ? <>
                <li><Link to='/myProfile'>My Profile</Link></li>
                <button onClick={handleLogOut} className="btn btn-ghost text-xl">Logout</button>
                </> : <>
                <li><Link to='/login'>Login</Link></li>
                </>
            }
            </div>
    return (
        <div className="navbar bg-black w-11/12 bg-opacity-30 fixed z-10 text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {navOptions}
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">Pearl Bistro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {navOptions}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
        </div>
    );
};

export default Navbar;