import { Helmet } from 'react-helmet-async';
import MenuCoverCard from '../../MenuCoverCArd/MenuCoverCard';
import menuImg from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/UseMenu';
import SectionTitle from '../../Components/sectionTitle/SectionTitle';
import MenuCategory from '../../MenuCategory/MenuCategory';
import soupImg from '../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import kebabImg from '../../assets/menu/kebab.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import steakImg from '../../assets/menu/steak.jpg'
import sushiImg from '../../assets/menu/sushi.jpg'
import drinkImg from '../../assets/menu/mojito.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
// import PopularMenu from '../PopularMenu/PopularMenu';

const Menu = () => {
    const [menu] = useMenu();
    // console(menu);
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    const kebab = menu.filter(item => item.category === 'kebab');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'dessert');
    const sushi = menu.filter(item => item.category === 'sushi');
    const steak = menu.filter(item => item.category === 'steak');
    console.log(pizza, soup);
    return (
        <div>
            <Helmet>
                <title>Pearl Bistro | Menu</title>
            </Helmet>
            <MenuCoverCard img={menuImg} title="Our Menu" titleInfo="Let's view the menu"></MenuCoverCard>
            {/* main cover */}
            <SectionTitle
            subHeading={"Don't Miss"} heading={"Today's Offer"}
            ></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>

            {/* soup */}
            <MenuCategory 
            items={soup}
            title={"Soup"}
            img={soupImg}
            titleInfo={'Dive into a bowl of comfort with our exquisite selection of soups! Each of our soups is lovingly crafted using the finest ingredients to offer you a delightful taste experience. From the rich, velvety smoothness of Tomato Soup to the hearty goodness of Chicken and Lentil soups, we have something to satisfy every craving.'}
            ></MenuCategory>

            {/* pizza */}
            <MenuCategory 
            items={pizza}
            title={"pizza"}
            titleInfo={'At our restaurant, pizza isn’t just a dish—it’s an experience. Every pizza is crafted with care, from the fresh dough to the finest toppings, all baked to golden perfection. Whether you’re craving the classic simplicity of a Margarita Pizza, the savory zest of Pepperoni, or the bold flavors of BBQ Chicken, each slice is made to satisfy.'}
            img={pizzaImg}
            ></MenuCategory>

            {/* Kebab */}
            <MenuCategory 
            items={kebab}
            title={"Kebab"}
            titleInfo={"Our kebabs bring the authentic taste of smoky, tender grilled meat right to your plate. From succulent Chicken Kebab to savory Lamb, Beef, and even Falafel Kebab, each skewer is marinated with a blend of aromatic spices and herbs for a flavorful experience like no other."}
            img={kebabImg}
            ></MenuCategory>

            {/* Salad */}
            <MenuCategory 
            items={salad}
            title={"Salad"}
            titleInfo={"Our salads are a celebration of freshness and flavor, bringing together vibrant ingredients that make each bite a satisfying experience. From the crisp crunch of Caesar and Greek salads to the wholesome goodness of Chicken and Spinach salads, every dish is crafted with the finest seasonal produce, complemented by a variety of dressings"}
            img={saladImg}
            ></MenuCategory>

            {/* Steak */}
            <MenuCategory 
            items={steak}
            title={"Steak"}
            titleInfo={"Our steaks are a true indulgence for meat lovers, expertly prepared to deliver the perfect balance of tenderness and flavor. From the rich marbling of Ribeye to the melt-in-your-mouth goodness of Filet Mignon, every cut is selected for its quality and grilled to perfection"}
            img={steakImg}
            ></MenuCategory>

            {/* Sushi */}
            <MenuCategory 
            items={sushi}
            title={"Sushi"}
            titleInfo={"Dive into a world of authentic sushi made with the freshest ingredients. At our restaurant, we craft each roll with care, combining the finest cuts of fish, perfectly seasoned rice, and a variety of toppings to create an unforgettable experience"}
            img={sushiImg}
            ></MenuCategory>

            {/* Dessert */}
            <MenuCategory 
            items={dessert}
            title={"Dessert"}
            titleInfo={"End your meal on a sweet note with our indulgent selection of desserts, carefully crafted to satisfy every craving. From rich and decadent chocolate cakes to the creamy goodness of cheesecakes, each treat is made with the finest ingredients to bring out the perfect balance of flavors"}
            img={dessertImg}
            ></MenuCategory>


            {/* Drinks */}
            <MenuCategory 
            items={drinks}
            title={"Drinks"}
            titleInfo={"Cool off and refresh your senses with our vibrant range of Mojitos, expertly crafted to deliver the perfect blend of mint, lime, and sweetness. Whether you're enjoying a lively night out or simply craving a refreshing drink, our Mojitos are the ideal choice to bring a burst of flavor to your day"}
            img={drinkImg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;











            {/* <PopularMenu></PopularMenu> */}
{/* 
            <MenuCoverCard img={menuImg} title="Our Menu"></MenuCoverCard>
            <PopularMenu></PopularMenu>

            <MenuCoverCard img={menuImg} title="Our Menu"></MenuCoverCard> */}
            {/* <PopularMenu></PopularMenu> */}