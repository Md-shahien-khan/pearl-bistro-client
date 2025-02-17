import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data : stats } = useQuery({
        queryKey : ['admin-stats'],
        queryFn : async() =>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    })
    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <div className="stats shadow w-full flex flex-col md:flex-row">
            <div className="stat place-items-center">
                <div className="stat-title">Revenue</div>
                <div className="stat-value">${stats.revenue}</div>
                <div className="stat-desc">From February 1st</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Users</div>
                <div className="stat-value flex gap-2 items-center justify-center"><FaUser></FaUser>{stats.users}</div>
                <div className="stat-desc">↗︎ 40 (2%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Orders</div>
                <div className="stat-value flex gap-2 items-center justify-center"><FaCartPlus></FaCartPlus> {stats.orders}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>

            <div className="stat place-items-center">
                <div className="stat-title">Menu Items</div>
                <div className="stat-value flex gap-2 items-center justify-center"><MdFastfood></MdFastfood> {stats.menuItems}</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
            </div>
        </div>
    );
};

export default AdminHome;