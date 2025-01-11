import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex ">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-700">
                <ul className="menu p-5">
                    {/* p4 chilo niche user home chilo just */}
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home part</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><MdReviews></MdReviews>Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><TbBrandBooking></TbBrandBooking> My Booking</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;