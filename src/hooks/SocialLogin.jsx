import { FaGoogle } from "react-icons/fa";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignInGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email : result.user?.email,
                name : result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
                .then(res =>{
                    console.log(res.data);
                    navigate('/');
                })
        })
    }
    return (
        <div>
             <button onClick={handleSignInGoogle} className="btn bg-yellow-800 text-white hover:bg-yellow-600 mt-2 w-full">
                <FaGoogle className='text-orange-600 text-xl'/> Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;

// onClick={handleSignInGoogle}