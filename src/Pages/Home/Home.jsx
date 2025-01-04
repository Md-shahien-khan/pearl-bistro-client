import { Helmet } from "react-helmet";
import About from "../about/About";
import Banner from "../Banner/Banner";
import Category from "../category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Upcoming from "../Upcoming/Upcoming";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Pearl Bistro | Home</title>
            </Helmet>
            <Banner></Banner> 
            <Category></Category>  
            <About></About>   
            <PopularMenu></PopularMenu>
            <ChefRecommend></ChefRecommend>
            <Upcoming></Upcoming>
            <Testimonials></Testimonials>    
        </div>
    );
};

export default Home;