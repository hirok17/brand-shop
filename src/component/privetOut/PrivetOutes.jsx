import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

 

const PrivetOutes = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return <span className="loading loading-infinity loading-lg absolute top-[35%] left-[35%]"></span>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivetOutes.propTypes = {
    children:PropTypes.node

}
export default PrivetOutes;