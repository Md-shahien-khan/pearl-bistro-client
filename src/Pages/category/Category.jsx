import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../src/Pages/category/category.css'
import { Pagination } from 'swiper/modules';
import slide1 from '../../../src/assets/home/soup.jpg'
import slide2 from '../../../src/assets/home/sushi.jpg'
import slide3 from '../../../src/assets/home/drinks.jpg'
import slide4 from '../../../src/assets/home/steak.jpg'
import slide5 from '../../../src/assets/home/shisha1.jpg'
import slide6 from '../../../src/assets/home/salad.jpg'
import slide7 from '../../../src/assets/home/burger.jpg'
import slide8 from '../../../src/assets/home/kabab.jpg'
import slide9 from '../../../src/assets/home/pizzza.jpg'
import slide10 from '../../../src/assets/home/dessert.jpg'


const Category = () => {
    return (
        <div>
            <div className='text-center p-10'>
                <p className='text-yellow-500 text-xl'>---From 11:00am to 10:00pm</p>
                <h3 className='text-yellow-700 text-3xl'>You can order as well!!!!</h3>
            </div>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Soup</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Sushi</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Mojito</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Steak</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>shisha</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide6} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Salad</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide7} alt="" />
                <h3 className='text-xl  md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Burger</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide8} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>kebab</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide9} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Pizza</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide10} alt="" />
                <h3 className='text-xl md:text-4xl uppercase text-center text-white -mt-32 pb-0 md:pb-20'>Dessert</h3>
            </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Category;