import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    // add total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    // handle delete from cart
    const handleDelete = id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    refetch();
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "This food has been deleted from cart.",
                          icon: "success"
                        });
                    }
                })
          }
        });
    }
    return (
        <div>
            {/* cart info */}
            <div className="flex justify-evenly mb-8">
                <h2 className="text-xl md:text-3xl">Items : {cart.length}</h2>
                <h2 className="text-xl md:text-3xl">Price : {totalPrice.toFixed(2)}</h2>
                {cart.length  ? <Link to="/dashboard/payment">
                    <button className="btn bg-yellow-600 text-white">Pay Now</button>
                </Link> : 
                    <button disabled className="btn bg-yellow-600 text-white">Pay Now</button>
                }
            </div>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) =>  <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src={item.image}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    
                                </div>
                                </td>
                                <td className="font-semibold">
                                    {item.name}
                                </td>
                                <td className="font-semibold">${item.price}</td>
                                <th>
                                <button
                                onClick={()=> handleDelete(item._id)}
                                className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default Cart;