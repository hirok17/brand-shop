import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data =useLoaderData();
    return (
        <section className="flex justify-center py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 bg-base-100 shadow-xl p-3">
              <div>
              <img className="w-[400px] rounded-lg" src={data.cover} alt="" /> 
              </div>
                <div className="space-y-3">
                    <h2 className="text-xl font-extrabold">{data.name}</h2>
                    <p className="text-lg font-semibold">Brand: {data.brand}</p>
                    <p className="font-semibold">Rating: {data.rating}</p>
                    <p className="font-semibold">price: ${data.price}</p>
                    <p className="w-[300px]"><b>Description:</b> {data.description}</p>
                    <div className="card-actions">
                        <button className="btn text-white bg-[#EA1B25] hover:bg-[#0F233C]">Add to cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;