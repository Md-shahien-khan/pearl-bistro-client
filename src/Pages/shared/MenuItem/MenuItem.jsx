import React from 'react';

const MenuItem = ({items}) => {
    const { name, image, price, recipe} = items;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase font-bold'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>£{price}</p>
        </div>
    );
};

export default MenuItem;