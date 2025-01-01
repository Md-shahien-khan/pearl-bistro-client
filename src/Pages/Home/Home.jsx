import About from "../about/About";
import Banner from "../Banner/Banner";
import Category from "../category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Category></Category>  
            <About></About>   
            <PopularMenu></PopularMenu>     
        </div>
    );
};

export default Home;