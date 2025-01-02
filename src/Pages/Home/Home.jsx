import About from "../about/About";
import Banner from "../Banner/Banner";
import Category from "../category/Category";
import ChefRecommend from "../ChefRecommend/ChefRecommend";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Category></Category>  
            <About></About>   
            <PopularMenu></PopularMenu>
            <ChefRecommend></ChefRecommend>     
        </div>
    );
};

export default Home;