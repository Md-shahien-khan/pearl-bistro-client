
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import loginBg from '../../assets/others/authentication2.png'
import loginBg2 from '../../assets/others/authentication.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
// import { signInWithPopup } from 'firebase/auth';
import SocialLogin from '../../hooks/SocialLogin';
// import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)

    // getting sign in from authContext
    const {signIn} = useContext(AuthContext);
    // const provider = new GoogleAuthProvider();

    // Login form
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // sign in functionality
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User login successful",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, {replace : true});
            })
    };

    // Handle Google login
    // const handleSignInGoogle = () => {
    //     signInWithPopup(auth, provider)
    //     .then(result => {
    //         const user = result.user;
    //         console.log(user);
    //         Swal.fire({
    //             title: "User login successful",
    //             showClass: {
    //               popup: `
    //                 animate__animated
    //                 animate__fadeInUp
    //                 animate__faster
    //               `
    //             },
    //             hideClass: {
    //               popup: `
    //                 animate__animated
    //                 animate__fadeOutDown
    //                 animate__faster
    //               `
    //             }
    //           });
    //           navigate(from, {replace : true});            
    //     })
    //     .catch(error => {
    //         console.log("Google login error:", error);
    //     });
    // };

    // loadCaptchaEngine
    useEffect(() =>{
        loadCaptchaEnginge(6); 
    }, []);

    // validate captcha
    const handleValidateCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    };

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the state
    };
    return (
    <>
    <Helmet>
        <title>Pearl Bistro | Login</title>
    </Helmet>
    <div className="hero bg-base-200 min-h-screen"  style={{ backgroundImage: `url(${loginBg2})`, backgroundSize: 'cover' }}>
    <div className="hero-content flex-col lg:flex-row shadow-lg" style={{ backgroundImage: `url(${loginBg2})`, backgroundSize: 'cover' }}>
        <div className="text-center md:w-1/2 lg:text-left flex flex-col items-center">
            <h1 className="text-5xl font-bold text-yellow-800">Login now</h1>
            <img src={loginBg} alt="" className='md:w-[900px]' />
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl border" style={{ backgroundImage: `url(${loginBg2})`, backgroundSize: 'cover' }}>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    {/* Email */}
                <label className="label">
                    <span className="label-text text-yellow-800 text-xl">Email</span>
                </label>
                <input type="email" name='email' placeholder="Enter you email address" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    {/* Password */}
                    <label className="label">
                        <span className="label-text text-yellow-800 text-xl">Password</span>
                    </label>
                    <div className="relative">
                        <input type={showPassword ? 'text' : 'password'} // Toggle input type 
                        name="password"
                        placeholder="Password"
                        className="input input-bordered w-full"
                        required
                        />
                        <span
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-3 cursor-pointer">
                            {showPassword ? <FaEyeSlash /> : <FaEye />} 
                            </span>
                            </div>
                    {/* Forget password */}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-yellow-800 text-xl">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control">
                    {/* Captcha */}
                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input onBlur={handleValidateCaptcha} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                    {/* <button className='btn btn-outline btn-xs mt-2 bg-yellow-700 text-white'>Validate</button> */}
                </div>
                <div className="form-control mt-2">
                    {/* remove flase and disabled again later */}
                    <input disabled={false} className="btn text-white border-yellow-700 bg-yellow-800 hover:bg-yellow-600" type="submit" value="Login" />
                </div>
                {/* google login */}
                <SocialLogin></SocialLogin>
                <p className='text-yellow-800'>Don't have an account? Please <Link to='/signup' className='font-bold'>Sign Up</Link></p>
            </form>
        </div>
    </div>
    </div>
    </>
    );
};

export default Login;