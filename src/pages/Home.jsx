import { Link, useLoaderData } from "react-router-dom";
import HomeSlider from "../component/slider/HomeSlider";



const Home = () => {
  const shopBrand = useLoaderData();

  return (
    <div className="container mx-auto px-5 pb-5">
      <HomeSlider></HomeSlider>
      <h2 className="text-5xl font-bold text-center uppercase mt-10">Choose your brand</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7">
        {
          shopBrand.map(brand => <>
            <div>
              <Link to={`/products/${brand.brand}`}><img src={brand.image} className="md:w-[355px] md:h-[270px] rounded-lg hover:rotate-3" alt="" /></Link>

            </div>
          </>)
        }
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold text-red-500">HIGHLIGHTS</h3>
        <h3 className="text-2xl font-bold">SPRING 2024 READY-TO-WEAR</h3>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-5 mt-16">
        <div className="lg:w-[45%]">
          <img src="https://i.ibb.co/0hj2NRM/flan-gucci-blp-231002-p1-d.jpg" alt="" />
        </div>
        <div className="lg:w-[45%]">
          <img src="https://i.ibb.co/jVRLbX2/flan-gucci-blp-231002-p2-d.jpg" alt="" />
          <h3 className="text-xl font-bold mt-6">GUCCI</h3>
          <p>Founded in Florence, Italy in 1921, Gucci is one of the world’s leading luxury brands. Following the House’s centenary, Gucci forges ahead continuing to redefine fashion and luxury while celebrating creativity, Italian craftsmanship, and innovation. Gucci is part of the global luxury group Kering, which manages renowned Houses in fashion, leather goods, jewellery, and eyewear. This season, shop the Gucci collections Cosmogonie and Cruise 2023.</p>
        </div>

      </div>
      <div className="text-center mt-11 mb-7">
        <h3 className="text-xl font-semibold text-red-500">use coupon code</h3>
        <h3 className="text-2xl font-bold">25% discount</h3>

      </div>
      <div className="flex justify-center">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-5xl">
              <span style={{ "--value": 46 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;