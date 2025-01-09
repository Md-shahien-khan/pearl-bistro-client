import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import loginBg from '../../assets/others/authentication2.png'
import loginBg2 from '../../assets/others/authentication.png'
import { Link } from 'react-router-dom';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    // Login form
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };

    // loadCaptchaEngine
    useEffect(() =>{
        loadCaptchaEnginge(6); 
    }, []);

    // validate captcha
    const handleValidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }
    return (
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
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
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
                    <input ref={captchaRef} type="text" name='captcha' placeholder="Type the captcha above" className="input input-bordered" required />
                    <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-2 bg-yellow-700 text-white'>Validate</button>
                </div>
                <div className="form-control mt-2">
                    <input disabled={disabled} className="btn text-white border-yellow-700 bg-yellow-800 hover:bg-yellow-600" type="submit" value="Login" />
                </div>
                <p className='text-yellow-800'>Don't have an account? Please <Link className='font-bold'>Register</Link></p>
            </form>
        </div>
    </div>
    </div>
    );
};

export default Login;