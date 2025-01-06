import ChefRecommendCard from './ChefRecommendCard';
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../Components/sectionTitle/SectionTitle';

const ChefRecommend = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([])
    //     useEffect(() =>{
    //         fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const offerItems = data.filter(item => item.category === 'offered')
    //         setMenu(offerItems)
    //         })
    //     }, [])
    return (
        <div className='md:mt-32'>
            <SectionTitle
            subHeading={"Must Try"}
            heading={"Chef Recommends"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
                {
                    popular.map(food => 
                    <ChefRecommendCard key={food._id}
                    items={food}
                    >
                    </ChefRecommendCard>)
                }
            </div>
        </div>
    );
};

export default ChefRecommend;