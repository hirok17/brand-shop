import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    return (
        <section className='container mx-auto px-3'>
            
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pb-3">
                <a href="#">
                    <img className="p-8 rounded-t-lg w-full" src={brand.cover} alt="product image" />
                </a>
                <div className="px-5 pb-5">

                    <h5 className="text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">{brand.name}</h5>
                    <p className='text-lg font-semibold mt-3'>Rating: <span className='text-red-500'>{brand.rating}</span></p>
            
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${brand.price}</span>
                        <Link to={`/update/${brand._id}`}><button className='btn text-white bg-[#EA1B25] hover:bg-[#0F233C]'>Update</button></Link>
                        
                    </div>
                </div>
                <Link to={`/products/cart/${brand._id}`}><button className='w-full btn text-white bg-[#0F233C] hover:bg-[#0F233C]'>Details</button></Link>
            </div>

        </section>
    );
};
Brand.propTypes = {
    brand: PropTypes.object

}
export default Brand;