import React, { useEffect, useState } from 'react';

import MenuItem from '../shared/MenuItem/MenuItem';
import SectionTitle from '../../Components/sectiontitle/SectionTitle';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, [])
    return (
        <section>
            <SectionTitle
            heading={"From Our Menu"}
            subHeading={"Popular Items"}>
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10 mb-10'>
                {
                    menu.map(item => <MenuItem 
                        key={item._id}
                        items={item}
                        ></MenuItem>)
                }              
            </div>
            <div className='text-center'>
                <button className="btn text-yellow-700 border-b-yellow-700 hover:bg-black">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;