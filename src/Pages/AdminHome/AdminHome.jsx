import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaCartPlus, FaUser } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data : stats = {} } = useQuery({
        queryKey : ['admin-stats'],
        queryFn : async() =>{
            const res = await axiosSecure.get('/admin-stats');
            return res.data
        }
    });

    // const { data : chartData = [] } = useQuery({
    //     queryKey : ['order-stats'],
    //     queryFn : async() =>{
    //         const res = await axiosSecure.get('/order-stats');
    //         return res.data
    //     }
    // })

    // custom shape for the bar chart
    // const getPath = (x, y, width, height) => {
    //     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    //     ${x + width / 2}, ${y}
    //     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    //     Z`;
    //   };
      
    //   const TriangleBar = (props) => {
    //     const { fill, x, y, width, height } = props;
      
    //     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    //   };
      
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
                <div className="stat-value">${stats?.revenue}</div>
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
            {/* <div className="flex flex-col md:flex-row">
                <div className="w-1/2">
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                        ))}
                    </Bar>
                </BarChart>
                </div>
                <div className="w-1/2">
                </div>
            </div> */}
        </div>
    );
};

export default AdminHome;