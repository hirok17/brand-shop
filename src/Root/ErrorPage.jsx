import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error =useRouteError();
    console.log(error);
    return (
        <div className="absolute top-[35%] left-[35%] text-center space-y-4">
        <h1 className="text-4xl font-bold">Oops 404 !</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <Link to="/"><button className="btn btn-error text-white">Go Home</button></Link>
    </div>
    );
};

export default ErrorPage;