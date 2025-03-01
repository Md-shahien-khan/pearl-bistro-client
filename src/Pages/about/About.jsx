import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../../assets/home/chef-service.jpg';

const About = () => {
    // Animation for child div (fade in and slide up)
    const childVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
    };

    return (
        <div 
            className="bg-cover bg-center bg-no-repeat h-[600px] md:h-[500px] mt-10 md:mt-20 bg-fixed"
            style={{ backgroundImage: `url(${aboutImg})`, objectFit: 'cover' }}
        >
            {/* Center content within the parent div */}
            <div className="flex items-center justify-center h-full">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }} // Triggers when part of the element is in view
                    variants={childVariants}
                    className="text-center p-10 bg-white bg-opacity-30 backdrop-blur-md rounded-lg w-4/5 h-[500px] md:h-[300px] lg:h-[200px] mx-auto text-black"
                >
                    <h1 className="text-xl md:text-4xl font-bold">Pearl Bistro</h1>
                    <p className="mt-4 text-sm">
                        Welcome to Pearl Bistro, where culinary excellence meets cozy ambiance. We offer a diverse range of delicious dishes that will satisfy every craving. From sizzling pizzas and savory kebabs to delectable desserts and refreshing drinks, there's something for everyone at our table. 
                        Whether you're in the mood for a hearty soup or a light snack, and for those who prefer to enjoy our delicious offerings from the comfort of their home, we offer the convenience of online ordering. Simply browse our menu, order your favorites, and we'll deliver everything straight to your door.
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
