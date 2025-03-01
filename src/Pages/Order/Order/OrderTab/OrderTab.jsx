import React from "react";
import { motion } from "framer-motion"; 
import FoodCard from "../FoodCard";

const OrderTab = ({ items }) => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }, 
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="grid md:grid-cols-3 gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            {items.map((item) => (
                <motion.div key={item._id} variants={itemVariants}>
                    <FoodCard items={item} />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default OrderTab;
