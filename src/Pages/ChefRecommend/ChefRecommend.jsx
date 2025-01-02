import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/sectiontitle/SectionTitle';
import ChefRecommendCard from './ChefRecommendCard';

const ChefRecommend = () => {
    const [menu, setMenu] = useState([])
        useEffect(() =>{
            fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const offerItems = data.filter(item => item.category === 'offered')
            setMenu(offerItems)
            })
        }, [])
    return (
        <div>
            <SectionTitle
            subHeading={"Must Try"}
            heading={"Chef Recommends"}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
                {
                    menu.map(food => 
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