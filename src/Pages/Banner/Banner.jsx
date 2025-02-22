import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../src/assets/home/04.jpg'
import img2 from '../../../src/assets/home/02.jpg'
import img3 from '../../../src/assets/home/01.jpg'

const Banner = () => {
    return (
        <div className="">
        <Carousel 
            autoPlay={true}
            stopOnHover={true}       
            infiniteLoop={true}       
            showThumbs={false}        
            interval={2000}          
        >
            <div>
                <img src={img1} className="w-full h-[500px] md:h-[600px] sm:h-[300px] object-cover" />
            </div>
            <div>
                <img src={img2} className="w-full h-[500px] md:h-[600px] sm:h-[300px] object-cover" />
            </div>
            <div>
                <img src={img3} className="w-full h-[500px] md:h-[600px] sm:h-[300px] object-cover" />
            </div>
        </Carousel>
        </div>
    );
};

export default Banner;