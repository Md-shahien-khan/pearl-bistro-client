const ChefRecommendCard = ({items}) => {
    const { name, image, price, recipe} = items;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                src={image}
                className="w-full h-[220px]"
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="flex flex-col gap-y-2 items-center justify-center">
                    <h2 className="card-title text-center">{name}</h2>
                    <p className="text-center">{recipe}</p>
                    <div className="card-actions">
                        <button className="btn text-yellow-700 border-b-yellow-700 hover:bg-black">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendCard;