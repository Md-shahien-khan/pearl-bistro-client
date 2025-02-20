// import React, { useEffect, useState } from 'react';

// import MenuItem from '../shared/MenuItem/MenuItem';
// import SectionTitle from '../../Components/sectiontitle/SectionTitle';
// import { Link } from 'react-router-dom';

// const PopularMenu = () => {
//     const [menu, setMenu] = useState([])
//     useEffect(() =>{
//         fetch('menu.json')
//         .then(res => res.json())
//         .then(data => {
//             const popularItems = data.filter(item => item.category === 'popular')
//             setMenu(popularItems)
//         })
//     }, [])
//     return (
//         <section>
//             <SectionTitle
//             heading={"From Our Menu"}
//             subHeading={"Popular Items"}>
//             </SectionTitle>
//             <div className='grid md:grid-cols-2 gap-10 mb-10'>
//                 {
//                     menu.map(item => <MenuItem 
//                         key={item._id}
//                         items={item}
//                         ></MenuItem>)
//                 }              
//             </div>
//             <div className='text-center'>
//                 <Link to='/menu' className="btn text-yellow-700 border-b-yellow-700 hover:bg-black">View Full Menu</Link>
//             </div>
//         </section>
//     );
// };

// export default PopularMenu;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MenuItem from '../shared/MenuItem/MenuItem';
import SectionTitle from '../../Components/sectiontitle/SectionTitle';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems);
            });
    }, []);

    // Framer Motion Variants for Animations
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Start off-screen
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.6, 
                type: "spring", 
                stiffness: 100 
            } 
        }
    };

    return (
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />
            
            {/* Animated Grid */}
            <motion.div 
                className='grid md:grid-cols-2 gap-10 mb-10'
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } } // Stagger effect
                }}
            >
                {menu.map(item => (
                    <motion.div 
                        key={item._id} 
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }} // Slight scale-up on hover
                        whileTap={{ scale: 0.95 }} // Press effect
                    >
                        <MenuItem items={item} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Button with Hover Animation */}
            <motion.div 
                className='text-center'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link to='/menu' className="btn text-yellow-700 border-b-yellow-700 hover:bg-black">
                    View Full Menu
                </Link>
            </motion.div>
        </section>
    );
};

export default PopularMenu;