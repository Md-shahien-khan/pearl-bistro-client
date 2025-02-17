import React from 'react';
import SectionTitle from '../../Components/sectiontitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { FaUtensils } from 'react-icons/fa';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    // getting data
    const {name, category, recipe, price, _id} = useLoaderData();
    const axiosSecure = useAxiosSecure();
    const axiosPublic= useAxiosPublic();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
            const imageFile = { image : data.image[0]}
            const res = await axiosPublic.post(image_hosting_api, imageFile,{
                headers : {
                    'content-type'  : 'multipart/form-data'
                }
            });
            // data is success so sending the data in database
            if(res.data.success){
                const menuItem = {
                    name : data.name,
                    category : data.category,
                    price : parseFloat(data.price),
                    recipe : data.recipe,
                    image : res.data.data.display_url 
                }
                const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
                console.log(menuRes.data);
                if(menuRes.data.modifiedCount > 0){
                    reset();
                    Swal.fire({
                        title: `${data.name} is updated to the menu`,
                        icon: "success",
                        draggable: true
                    });
                }
            }
            console.log("with image url", res.data);
        };
    return (
        <div>
            <SectionTitle heading="Update an Item"
            subHeading="Update the food item"></SectionTitle>
            <div>
            {/* form */}
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full md:my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                        type="text" 
                        defaultValue={name}
                        placeholder="Recipe Name"
                        {...register('name', { required: true})} 
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex md:flex-row gap-2 md:gap-6 ">
                    {/* Category */}
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Category*</span>
                        </div>
                        <select defaultValue={category} {...register("category", { required: true})}
                        className="select select-bordered w-full ">
                            <option disabled value="default">Select a category</option>
                            <option value="soup">Soup</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="kebab">Kebab</option>
                            <option value="steak">Steak</option>
                            <option value="sushi">Sushi</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>
                    {/* Price */}
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Price*</span>
                        </div>
                        <input
                        type="number" 
                        defaultValue={price}
                        placeholder="price"
                        {...register('price', { required: true})} 
                        className="input input-bordered w-full" />
                    </div>
                </div>
                {/* recipe details */}
                <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea defaultValue={recipe} {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </label>
                {/* upload image */}
                <div className="form-control w-full my-6">
                    <input {...register('image', { required: false})} type="file" className="file-input w-full max-w-xs" />
                </div>
                {/* add item button */}
                <button className="btn text-yellow-700 bg-yellow-200 border-1 border-yellow-700">
                    Update Menu Item <FaUtensils className="text-yellow-600"></FaUtensils>
                </button>
            </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateItem;