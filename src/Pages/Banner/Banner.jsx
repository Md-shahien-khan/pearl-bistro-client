import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../src/assets/home/04.jpg'
import img2 from '../../../src/assets/home/02.jpg'
import img3 from '../../../src/assets/home/01.jpg'

const Banner = () => {
    return (
        <Carousel
        autoPlay={true}
        stopOnHover={true}       
        infiniteLoop={true}       
        showThumbs={false}        
        interval={2000}          
        >
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2}  />
            </div>
            <div>
                <img src={img3}  />
            </div>
    </Carousel>
    );
};

export default Banner;