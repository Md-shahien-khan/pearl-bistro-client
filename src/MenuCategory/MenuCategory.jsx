import React from 'react';
import ChefRecommendCard from '../Pages/ChefRecommend/ChefRecommendCard';
import MenuCoverCard from '../MenuCoverCArd/MenuCoverCard';
import MenuItem from '../Pages/shared/MenuItem/MenuItem';

const MenuCategory = ({items, title, img, titleInfo}) => {
    // console.log(items)
    return (
        <div className='pt-8'>
            {title && <MenuCoverCard img={img} title={title} titleInfo={titleInfo}></MenuCoverCard>}
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10 my-16'>
                {
                    items.map(food => 
                    <MenuItem key={food._id}
                    items={food}>
                    </MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;