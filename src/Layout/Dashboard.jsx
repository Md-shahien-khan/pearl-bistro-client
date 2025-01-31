import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdFastfood, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex flex-col md:flex-row">
            {/* dashboard side bar */}
            <div className="w-full md:w-64 min-h-screen bg-yellow-600">
                <ul className="menu p-5">
                    <li className="text-xl text-white">
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li className="text-xl text-white">
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
                    </li>
                    <li className="text-xl text-white">
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li className="text-xl text-white">
                        <NavLink to='/dashboard/review'><MdReviews></MdReviews>Add Review</NavLink>
                    </li>
                    <li className="text-xl text-white">
                        <NavLink to='/dashboard/review'><TbBrandBooking></TbBrandBooking> My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className="text-xl text-white">
                        <NavLink to='/'><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li className="text-xl text-white">
                        <NavLink to='/order/salad'><MdFastfood></MdFastfood> Menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;