// import React from 'react';
// import SectionTitle from '../../Components/sectiontitle/SectionTitle';
// import upComingImg from '../../assets/menu/lamb-ribs.jpg'
// import './upcoming.css'

// const Upcoming = () => {
//     return (
//         <>
//         <SectionTitle
//             subHeading={"Check it out"}
//             heading={"Available from this month"}>
//         </SectionTitle>
//         <div className='upcoming-style text-white pt-10 my-20 bg-fixed'>
//             <div className='md:flex md:flex-col lg:flex-row justify-center items-center pb-20 pt-12  w-4/5 mx-auto bg-slate-500 bg-opacity-20 rounded-lg'>
//                 <div>
//                     <img className='lg:w-[1900px]' src={upComingImg} alt="" />
//                 </div>
//                 <div className='md:ml-10'>
//                     <p className='text-xl p-4'>Ramb Ribs Chef’s Special</p>
//                     <p className='p-4'>The Ramb Ribs Chef’s Special is an exclusive dish that combines the richness of slow-cooked, tender ribs with a unique blend of flavors that tantalize the taste buds. These ribs are marinated for hours in a signature sauce that balances smoky, sweet, and spicy elements. Once grilled to perfection, they are glazed with a final coat of the chef's special sauce to enhance the flavors, making each bite irresistible. Served with a side of crispy fries or fresh seasonal vegetables, this dish promises to take you on a culinary adventure. Whether you're a lover of bold flavors or someone who appreciates a comforting, hearty meal, the Ramb Ribs Chef’s Special is a must-try.</p>
//                     <button className="btn btn-outline border-t-0 border-r-0 border-l-0 border-b-2 border-b-black text-white m-4">Read More</button>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// };

// export default Upcoming;






import React from 'react';
import { motion } from "framer-motion";
import SectionTitle from '../../Components/sectiontitle/SectionTitle';
import upComingImg from '../../assets/menu/lamb-ribs.jpg';
import './upcoming.css';
import { Link } from 'react-router-dom';

const Upcoming = () => {
    // Motion animation for child div
    const childVariants = {
        hidden: { opacity: 0, y: 50 }, // Start from bottom
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <>
            <SectionTitle subHeading={"Check it out"} heading={"Available from this month"} />

            <div className='upcoming-style text-white pt-10 my-20 bg-fixed'>
                {/* Animated Child Div */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // Triggers every time on scroll
                    variants={childVariants}
                    className='md:flex md:flex-col lg:flex-row justify-center items-center pb-20 pt-12 w-4/5 mx-auto bg-slate-500 bg-opacity-20 rounded-lg'
                >
                    <div>
                        <img className='lg:w-[1900px]' src={upComingImg} alt="" />
                    </div>
                    <div className='md:ml-10'>
                        <p className='text-xl p-4'>Ramb Ribs Chef’s Special</p>
                        <p className='p-4'>
                            The Ramb Ribs Chef’s Special is an exclusive dish that combines the richness of slow-cooked, 
                            tender ribs with a unique blend of flavors that tantalize the taste buds. These ribs are marinated 
                            for hours in a signature sauce that balances smoky, sweet, and spicy elements. Once grilled to 
                            perfection, they are glazed with a final coat of the chef's special sauce to enhance the flavors, 
                            making each bite irresistible. Served with a side of crispy fries or fresh seasonal vegetables, 
                            this dish promises to take you on a culinary adventure.
                        </p>
                        <Link to='/menu' className="btn btn-outline border-t-0 border-r-0 border-l-0 border-b-2 border-b-black text-white m-4">
                            View Full Menu
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default Upcoming;
