
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



// chef recommend
const ChefRecommendCard = ({items}) => {
    const { name, image, price, recipe, _id} = items;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () =>{
        if(user && user.email){
            // send cart item to database
            // console.log(user.email, food);
            const cartItem = {
                menuId : _id,
                email : user.email,
                name, 
                image, 
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            title: `${name} added to cart`,
                            text: "Thank you for ordering from us",
                            imageUrl: `${image}`,
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: "Custom image"
                        });
                        // refetch the cart to update the cart items count
                        refetch();
                    }                   
                })
        }
        else{
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                //   send the user to login page
                navigate('/login', {state : {from : location}});
                }
            });
        }
    }
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                src={image}
                className="w-full h-[220px]"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex flex-col gap-y-2 items-center justify-center h-[210px]">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className="text-center">{recipe}</p>
                    <p className="text-center text-yellow-700 font-bold">£{price}</p>
                    <div className="card-actions">
                        <button onClick={handleAddToCart}
                         className="btn text-yellow-700 border-b-yellow-700 hover:bg-black">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendCard;