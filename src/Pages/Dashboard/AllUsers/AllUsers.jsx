import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data : users = [], refetch} = useQuery({
        queryKey : ['users'],
        queryFn : async () =>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    // handle make admin
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res =>{
                console.log(res.data)
                if(res.data.modifiedCount > 0){
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin Now!!`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }

    // handle delete
    const handleDeleteUser = user =>{
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
            axiosSecure.delete(`/users/${user._id}`)
                .then(res =>{
                    refetch();
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "This user has been deleted from user list.",
                          icon: "success"
                        });
                    }
                })
          }
        });
    }
    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users : {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button
                                    onClick={()=> handleMakeAdmin(user)}
                                    className="btn bg-yellow-400 btn-lg">
                                        <FaUsers className="text-yellow-800"></FaUsers>
                                    </button>  }                             
                                </td>
                                <td>
                                    <button
                                    onClick={()=> handleDeleteUser(user)}
                                    className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button> 
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
        </div>
        
    );
};

export default AllUsers;