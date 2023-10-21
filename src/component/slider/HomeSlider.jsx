

const HomeSlider = () => {
    return (
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/tH09csB/clothing-store.jpg)' }}>
                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Most Valuable Fashion Brands</h1>
                        <p className="mb-5">There are several characteristics that are often associated with luxury brands, including exclusivity, high quality, and exceptional customer service.</p>
                        <button className="btn text-white bg-[#EA1B25] hover:bg-[#0F233C]">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSlider;