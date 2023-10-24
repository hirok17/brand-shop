import Swal from 'sweetalert2';

const Upload = () => {
    const heandealForm=(e)=>{
        e.preventDefault();
        const name =e.target.name.value;
        const price=e.target.price.value;
        const brand =e.target.brand.value;
        const cover =e.target.image.value;
        const category =e.target.category.value;
        const rating =e.target.rating.value;
        const description =e.target.description.value;
        
        const productInfo ={name, price, brand, cover, category, rating, description};
        console.log(productInfo);

        fetch('https://brand-shop-server-ten-kohl.vercel.app/products', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(productInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product add successful',
                    showConfirmButton: false,
                    timer: 1500
                  })
               
            }
        })


    }
    return (
        <section>
            <div className="hero min-h-screen bg-base-200 py-5">
                <div className="hero-content flex-col">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl font-bold text-[#374151]">Add Your Products</h1>
                        
                    </div>
                    <div className="flex-shrink-0 w-full shadow-2xl shadow-black bg-base-100 p-5 rounded-lg">
                        <form onSubmit={heandealForm}>
                            <div className="flex justify-center gap-4 ">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Product Name:</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter product name" className="input input-bordered w-full focus:outline-none" required />
                                    <label className="label">
                                        <span className="label-text">Brand Name:</span>
                                    </label>
                                    <input type="text" name="brand" placeholder="Enter Brand Name" className="input input-bordered w-full focus:outline-none" required />
                                    <label className="label">
                                        <span className="label-text">Category:</span>
                                    </label>
                                    <input type="text" name="category" placeholder="Enter product category" className="input input-bordered w-full focus:outline-none" required />
                                </div>
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text">Price:</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="input input-bordered w-full focus:outline-none" required />
                                    <label className="label">
                                        <span className="label-text">Rating:</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="product rating" className="input input-bordered w-full focus:outline-none" required />
                                   
                                    <label className="label">
                                        <span className="label-text">Product Image:</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Enter image URL" className="input input-bordered w-full focus:outline-none" required />
                                </div>
                               
                            </div>
                                    <label className="label">
                                        <span className="label-text">Description:</span>
                                    </label>
                                    <textarea name="description" cols="30" rows="10" className="input input-bordered w-full" required></textarea>

                            <div className="form-control mt-6">
                                <input className="btn text-white bg-[#EA1B25] hover:bg-[#0F233C]" type="submit" value="Add product" />
                                 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Upload;