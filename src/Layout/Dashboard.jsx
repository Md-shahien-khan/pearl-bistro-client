// import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
// import { MdFastfood, MdReviews } from "react-icons/md";
// import { TbBrandBooking } from "react-icons/tb";
// import { NavLink, Outlet } from "react-router-dom";
// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";

// const Dashboard = () => {
//     const [cart] = useCart();

//     // TODO : getAdmin Value from database
//     const [isAdmin] = useAdmin();
//     return (
//         <div className="flex flex-col md:flex-row">
//             {/* dashboard side bar */}
//             <div className="w-full md:w-64 min-h-screen bg-yellow-600">
//                 <ul className="menu p-5">
//                     {
//                         isAdmin ? <>
//                         <li className=" text-white">
//                         <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/addItems'><FaUtensils></FaUtensils> Add items</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/manageItems'><FaList></FaList> Manage Items</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/bookings'><FaBook></FaBook> Manage Bookings</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/users'><FaUsers></FaUsers> All Users</NavLink>
//                         </li>
//                         </>
//                         :
//                         <>
//                         <li className=" text-white">
//                         <NavLink to='/dashboard/userHome'><FaHome></FaHome> User Home</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart ({cart.length})</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/history'><FaCalendar></FaCalendar> not Payment History</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/review'><MdReviews></MdReviews>Add Review</NavLink>
//                         </li>
//                         <li className=" text-white">
//                             <NavLink to='/dashboard/paymentHistory'><TbBrandBooking></TbBrandBooking>Payment History</NavLink>
//                         </li>
//                         </>
//                     }


//                     <div className="divider"></div>

//                     {/* shared nav links */}
//                     <li className="text-white">
//                         <NavLink to='/'><FaHome></FaHome>Home</NavLink>
//                     </li>
//                     <li className=" text-white">
//                         <NavLink to='/order/salad'><MdFastfood></MdFastfood> Menu</NavLink>
//                     </li>
//                     <li className=" text-white">
//                         <NavLink to='/order/contact'><FaEnvelope></FaEnvelope> Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//             {/* dashboard content */}
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


import { useState } from "react";
import { FaBars, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { MdFastfood, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [menuOpen, setMenuOpen] = useState(false);

    
    const handleLinkClick = () => setMenuOpen(false);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Dropdown Button for Small & Medium Screens */}
            <div className="lg:hidden bg-yellow-600 p-4 flex justify-between items-center">
                <h2 className="text-white text-xl font-bold">Dashboard</h2>
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
                    <FaBars />
                </button>
            </div>

            {/* Sidebar for Medium & Small Screens (Dropdown) */}
            <div className={`w-full md:w-64 bg-yellow-600 transition-all duration-300 ease-in-out 
                ${menuOpen ? "block" : "hidden"} lg:block`}>
                <ul className="menu p-5">
                    {isAdmin ? (
                        <>
                            <li className="text-white">
                                <NavLink to='/dashboard/adminHome' onClick={handleLinkClick}>
                                    <FaHome /> Admin Home
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/addItems' onClick={handleLinkClick}>
                                    <FaUtensils /> Add Items
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/manageItems' onClick={handleLinkClick}>
                                    <FaList /> Manage Items
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/bookings' onClick={handleLinkClick}>
                                    <FaBook /> Manage Bookings
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/users' onClick={handleLinkClick}>
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="text-white">
                                <NavLink to='/dashboard/userHome' onClick={handleLinkClick}>
                                    <FaHome /> User Home
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/cart' onClick={handleLinkClick}>
                                    <FaShoppingCart /> My Cart ({cart.length})
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/history' onClick={handleLinkClick}>
                                    <FaCalendar /> Payment History
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/review' onClick={handleLinkClick}>
                                    <MdReviews /> Add Review
                                </NavLink>
                            </li>
                            <li className="text-white">
                                <NavLink to='/dashboard/paymentHistory' onClick={handleLinkClick}>
                                    <TbBrandBooking /> Payment History
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className="divider"></div>

                    {/* Shared nav links */}
                    <li className="text-white">
                        <NavLink to='/' onClick={handleLinkClick}>
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li className="text-white">
                        <NavLink to='/order/salad' onClick={handleLinkClick}>
                            <MdFastfood /> Menu
                        </NavLink>
                    </li>
                    <li className="text-white">
                        <NavLink to='/order/contact' onClick={handleLinkClick}>
                            <FaEnvelope /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
