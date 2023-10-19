/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/authprovider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from 'sweetalert2';
 
 

const SignUp = () => {
    const {createUser, googleUser} =useContext(AuthContext);
    
    const navigat =useNavigate();
    const [error, setError]=useState('');

    const handelform=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const photo=e.target.photo.value;
        const email=e.target.email.value;
        const password =e.target.password.value;
      

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            setError('Minimum 6 characters, at least one uppercase letter, one lowercase letter, one number and one special character');
            return;
        }else{
            setError('');
            createUser(email, password)
            .then(result=>{
               
                const user= result.user;
                updateProfile(result.user, {
                    displayName:name,
                    photoURL:photo
                })
                .then(()=>{
                    console.log('profile update');
                })
                .catch(error=>{
                    console.log(error);
                })
                
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Sign Up Successful',
                    showConfirmButton: false,
                    timer: 1500
                  })

                
                e.target.reset();
                navigat('/');

            })
            .catch(error=>{
                setError(error.message);
            })
        }

          
      
        
    }
    const hendalGoogle=()=>{
        googleUser()
        .then(result=>{
             
            const googleUsers =result.user;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Sign Up Successful',
                showConfirmButton: false,
                timer: 1500
              })
            navigat('/');
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
                        <h1 className="text-5xl font-bold">Registration</h1>
                        <p className="py-6 text-xl">Have an account? <Link to="/login" className="text-[#EA1B25]">Login Here</Link></p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelform} className="card-body">
                        <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name="photo" placeholder="photo url" required className="input input-bordered"  />
                            </div>
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
                                <button className="btn text-white bg-[#EA1B25] hover:bg-[#0F233C] transition-all duration-1000 ease-linear animate-bounce">Sign Up</button>
                            </div>
                        </form>
                            <div className="text-center">
                              <div className="flex justify-center gap-3 items-center mb-2">
                              <hr className="w-5 text-black" />
                                <p>OR</p>
                                <hr className="w-5" />
                              </div>
                            <button onClick={hendalGoogle} className="btn btn-outline">Google</button>
                            </div>

                            <div className="pl-3 pb-3 text-red-600">
                            {
                            error && <p>{error}</p>
                        }

                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;