import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from 'sweetalert2';

const Navber = () => {
    const {user, userLogOut} =useContext(AuthContext);
    console.log(user);
    const navber =<>
      
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/upload">Add Product</NavLink></li>
    <li><NavLink to="/cart">My Cart</NavLink></li>

</>
 const heandelLogout=()=>{
    userLogOut()
    .then(()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Log Out Successful',
            showConfirmButton: false,
            timer: 1500
          })
    })
    .catch(error=>{
        console.log(error);
    })
 }
    return (
        <section>
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                       {
                        navber
                       }
                    </ul>
                </div>
                <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {
                    navber
                   }
                </ul>
            </div>
            </div>
            
            <div className="navbar-end">
                {
                    user ? <button onClick={heandelLogout} className="btn text-white bg-[#EA1B25] hover:bg-[#0F233C]">Log Out</button>
                    :
                    <Link to="/signup"><button className="btn text-white bg-[#EA1B25] hover:bg-[#0F233C]">Sign Up/Login</button></Link>

                }
               
            </div>
        </div>

    </section>
    );
};

export default Navber;