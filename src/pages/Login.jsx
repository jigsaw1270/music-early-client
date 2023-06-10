import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../Provider/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
import GoogleSignIn from './GoogleSignin';
import image from '../assets/images/auth/login.png'

const Login = () => {
  
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

  

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user ;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

  

    return (
        <>
            <div className="min-h-screen text-white bg-transparent hero">
                <div className="flex-col hero-content md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="font-mono text-5xl font-bold text-center">Login now!</h1>
                        <div className="py-6 text-center rounded-lg"><img src={image} alt="" /></div>
                    </div>
                    <div className="max-w-sm shadow-2xl card md:w-1/2 bg-fuchsia-950">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="text-white label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="text-white label-text-alt link link-hover ">Forgot password?</a>
                                </label>
                            </div>
                            
                         
                            <div className="mt-6 form-control">
                                <input  className="text-white btn bg-fuchsia-700" type="submit" value="Login" />
                            </div>
                        </form>
                        <GoogleSignIn></GoogleSignIn>
                        <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;