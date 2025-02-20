// import ChefRecommendCard from './ChefRecommendCard';
// import useMenu from '../../hooks/UseMenu';
// import SectionTitle from '../../Components/sectionTitle/SectionTitle';

// const ChefRecommend = () => {
//     const [menu] = useMenu();
//     const popular = menu.filter(item => item.category === 'popular');
//     return (
//         <div className='md:mt-32'>
//             <SectionTitle
//             subHeading={"Must Try"}
//             heading={"Chef Recommends"}
//             ></SectionTitle>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
//                 {
//                     popular.map(food => 
//                     <ChefRecommendCard key={food._id}
//                     items={food}
//                     >
//                     </ChefRecommendCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default ChefRecommend;

import { motion } from "framer-motion";
import ChefRecommendCard from './ChefRecommendCard';
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../Components/sectionTitle/SectionTitle';

const ChefRecommend = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // Motion Variants for Parent Container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 } // Delay between each card animation
        }
    };

    // Motion Variants for Each Card
    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className='md:mt-32'>
            <SectionTitle subHeading={"Must Try"} heading={"Chef Recommends"} />
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }} 
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10"
            >
                {popular.map(food => (
                    <motion.div key={food._id} variants={cardVariants}>
                        <ChefRecommendCard items={food} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ChefRecommend;

