import { useEffect, useState } from "react";
import SectionTitle from "../../Components/sectiontitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useMenu from "../../hooks/UseMenu";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    // const [menu, setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => setMenu(data))
    // }, []);
    const [menu, loading, refetch] = useMenu();

    // handleDeleteItem 
    const handleDeleteItem = (item) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    // refetch to update the UI
                    refetch();
                    Swal.fire({
                    title: `${data.name} has been deleted from the menu`,
                    icon: "success",
                    draggable: true
                });
            }
            }
          });
    }
    return (
        <div>
            <SectionTitle heading="Manage All Items" subHeading="Hurry Up"></SectionTitle>
            {/* table */}
            <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                            No.
                        </th>
                        <th>Image</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>  <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                        <img
                                        src={item.image}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                {item.name}
                                <br />
                                </td>
                                <td>${item.price}</td>
                                <td>
                                <Link to={`/dashboard/updateItem/${item._id}`}>
                                <button
                                    className="btn btn-ghost btn-lg">
                                        <RxUpdate />
                                </button> 
                                </Link>
                                </td>
                                <td>    
                                    <button
                                    onClick={()=> handleDeleteItem(item)}
                                    className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button> 
                                </td>
                            </tr>)
                        }
                    </tbody>
                   
                </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;