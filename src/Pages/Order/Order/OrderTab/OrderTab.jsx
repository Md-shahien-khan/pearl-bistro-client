import FoodCard from '../FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <FoodCard key={item._id} items={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;