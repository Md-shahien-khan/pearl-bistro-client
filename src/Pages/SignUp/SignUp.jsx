import loginBg from '../../assets/others/authentication2.png'
import loginBg2 from '../../assets/others/authentication.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {  useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';



const SignUp = () => {
    // React Hook Form
    const {register, handleSubmit, watch, formState : { errors }, reset } = useForm();
    // getting create user from authContext
    const {createUser, updateUserProfile} = useContext(AuthContext);
    // navigate
    const navigate = useNavigate();
    // axios public 
    const axiosPublic = useAxiosPublic();
    // submit form
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result =>{
                const loggedUser = result.user;
                // console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info updated');
                        const userInfo = {
                            name : data.name,
                            email : data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res =>{
                                if(res.data.insertedId){
                                    console.log('user added to database');
                                    reset();
                                    Swal.fire({
                                        title: "User created successfully",
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
                                      navigate('/') 
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };
    // console.log(watch("example"));

    // show password
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
    };


  // Reset form
  const handleReset = () => {
    reset(); // This resets the form to initial state
  };
 
    return (
    <>
        <Helmet>
            <title>Pearl Bistro | Sign Up</title>
        </Helmet>
        <div className="hero bg-base-200 min-h-screen"  style={{ backgroundImage: `url(${loginBg2})`, backgroundSize: 'cover' }}>
        <div className="hero-content flex-col-reverse lg:flex-row shadow-lg" style={{ backgroundImage: `url(${loginBg2})`, backgroundSize: 'cover' }}>
            {/* form */}
            <div className="card bg-base-100 md:w-1/2 max-w-sm shadow-2xl border" style={{ backgroundImage: `url(${loginBg2})`, backgroundSize: 'cover' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        {/* Name */}
                    <label className="label">
                        <span className="label-text text-yellow-800 text-xl">Name</span>
                    </label>
                    <input type="text" name='name' {...register("name" , { required : true })} placeholder="Enter your name" className="input input-bordered" required />
                    {errors.name && <span className='text-red-600'>Name is required</span>}
                    </div>
                    <div className="form-control">
                        {/* photo url */}
                    <label className="label">
                        <span className="label-text text-yellow-800 text-xl">Photo URL</span>
                    </label>
                    <input type="text" name='name' {...register("photoURL" , { required : true })} placeholder="Photo URL" className="input input-bordered" required />
                    {errors.photoURL && <span className='text-red-600'>Photo URL is required</span>}
                    </div>
                    <div className="form-control">
                        {/* Email */}
                    <label className="label">
                        <span className="label-text text-yellow-800 text-xl">Email</span>
                    </label>
                    <input type="email" name='email'{...register("email" , { required : true })} placeholder="Enter you email address" className="input input-bordered" required />
                    {errors.email && <span className='text-red-600'>Email is required</span>}
                    </div>
                    <div className="form-control">
                        {/* Password */}
                        <label className="label">
                            <span className="label-text text-yellow-800 text-xl">Password</span>
                        </label>
                        <div className="relative">
                        <input
                        type={showPassword ? 'text' : 'password'} // toggle input type
                        name="password"
                        {...register('password', {
                            required: true,
                            minLength: 6,
                            maxLength: 10,
                            pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{9}$/,
                        })}
                        placeholder="password"
                        className="input input-bordered w-full"
                        required
                        />
                        <span
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-3 cursor-pointer"
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle between icons */}
                        </span>
                    </div>
                        {errors.password?.type === 'required' && <span className='text-red-600'>password field is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 character</span>}
                        {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password must be less than 10 character</span>}
                        {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must have one uppercase, one lower case, one number and one special character</span>}
                    </div>
                    <div className="form-control mt-2">
                        <input className="btn text-white border-yellow-700 bg-yellow-800 hover:bg-yellow-600" type="submit" value="Sign Up" />
                    </div>
                    <p className='text-yellow-800'>Already have an account? Please <Link to='/login' className='font-bold'>Login</Link></p>
                    <button
                type="button"
                onClick={handleReset}
                className="btn text-white border-yellow-700 bg-yellow-800 hover:bg-yellow-600 mt-2"
                >
                Reset form
                </button>
                </form>
            </div>
            {/* image */}
            <div className="text-center md:w-1/2 lg:text-left flex flex-col items-center">
                <h1 className="text-5xl font-bold text-yellow-800">SignUp now</h1>
                <img src={loginBg} alt="" className='md:w-[900px]' />
            </div>
        </div>
        </div>
    </>
    );
};

export default SignUp;