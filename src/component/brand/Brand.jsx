import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
    return (
        <section className='container mx-auto px-3'>
            
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="p-8 rounded-t-lg w-full" src={brand.cover} alt="product image" />
                </a>
                <div className="px-5 pb-5">

                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{brand.name}</h5>
                    <p className='text-lg font-semibold mt-3'>Rating: <span className='text-red-500'>{brand.rating}</span></p>
            
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${brand.price}</span>
                        <button className='btn text-white bg-[#EA1B25] hover:bg-[#0F233C]'>Add to cart</button>
                    </div>
                </div>
            </div>

        </section>
    );
};
Brand.propTypes = {
    brand: PropTypes.object

}
export default Brand;