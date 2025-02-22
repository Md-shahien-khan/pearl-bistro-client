import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ChefRecommendCard from "../Pages/ChefRecommend/ChefRecommendCard";
import MenuCoverCard from "../MenuCoverCArd/MenuCoverCard";
import MenuItem from "../Pages/shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, titleInfo }) => {
    console.log(title);

    // Animation variants for container (stagger effect)
    const containerVariants = {
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each child animation
            },
        },
    };

    // Animation variants for each item
    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <div className="pt-8">
            {title && <MenuCoverCard img={img} title={title} titleInfo={titleInfo} />}
            
            {/* Grid container with Framer Motion */}
            <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10 my-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible" // Triggers animation when in view
                viewport={{ once: false, amount: 0.2 }} // Ensures animation repeats when scrolling
            >
                {items.map((food) => (
                    <motion.div 
                        key={food._id} 
                        variants={itemVariants} 
                        initial="hidden"
                        whileInView="visible" 
                        viewport={{ once: false, amount: 0.2 }} // Repeats animation on scroll
                    >
                        <MenuItem items={food} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Order Now button */}
            <Link to={`/order/${title?.toLowerCase()}`}>
                <motion.button 
                    className="btn text-yellow-700 border-b-yellow-700 hover:bg-black"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Order Now
                </motion.button>
            </Link>
        </div>
    );
};

export default MenuCategory;
