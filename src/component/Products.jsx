import { useLoaderData } from "react-router-dom";
import Brand from "./brand/Brand";




const Products = () => {
    const data = useLoaderData();
    console.log(data);
    return (
       <section className="mb-9">
            <div className="carousel w-full">
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/znwjktT/sneaker-that-has-word-nike-it.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/5kH2R6S/hnslide.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/6w0prv4/hq720.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            {/* slider aera end */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-9">
                
            {
                (data.length > 0) ?
                data.map(brand=> <Brand key={brand._id} brand={brand}></Brand>)
                :
                <h3 className="text-center text-3xl font-semibold text-red-500"> Product Comming Soon</h3>
            }
       </div>
       </section>
    );
};

export default Products;