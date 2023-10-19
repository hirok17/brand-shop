/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../component/authprovider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

 
const Login = () => {
    const {userLogin, googleUser, user}= useContext(AuthContext);
    const [success, setSuccess] =useState('');
    const [error, setError] =useState('');

    const location =useLocation();
    const navigate =useNavigate();
    const hendelLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password =e.target.password.value;

        setError('');
        setSuccess('');

        userLogin(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            setSuccess('Login Successful');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(location ?.state ? location.state : '/');
            

        })
         .catch(error=>{
            setError(error.message);
            console.log(error);
         })

    };
    const hendalGoogleLogin=()=>{
        googleUser()
        .then(result=>{
            const googleUsers =result.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(location ?.state ? location.state : '/');
        })
        .catch(error=>{
            console.log(error);
        })
    }     
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6 text-xl">Still don‘t have an account? <Link to="/signup" className="text-pink-500">Sign up</Link></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={hendelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                             
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                             
                        </div>
                    </form>
                    <div className="text-center">
                          <div className="flex justify-center gap-3 items-center mb-2">
                          <hr className="w-5 text-black" />
                            <p>OR</p>
                            <hr className="w-5" />
                          </div>
                        <button onClick={hendalGoogleLogin} className="btn btn-outline">Google</button>
                        </div>
                    <div className="text-center pb-3">
                        {
                            !error ? <p className="text-green-600">{success}</p> :  <p className="text-red-600">{error}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;