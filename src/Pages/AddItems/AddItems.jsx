import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/sectiontitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    };
    return (
        <div>
            <SectionTitle heading="Add An item" subHeading="What's New"></SectionTitle>

            {/* form */}
            <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full md:my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                        type="text" 
                        placeholder="Type here"
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
                        <select {...register("category", { required: true})}
                        className="select select-bordered w-full ">
                            <option disabled selected>Select a category</option>
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
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </label>
                {/* upload image */}
                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true})} type="file" className="file-input w-full max-w-xs" />
                </div>
                {/* add item button */}
                <button className="btn text-yellow-700 bg-yellow-200 border-1 border-yellow-700">
                    Add Item <FaUtensils className="text-yellow-600"></FaUtensils>
                </button>
            </form>
            </div>
        </div>
    );
};

export default AddItems;