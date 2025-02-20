import SectionTitle from "../../Components/sectiontitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() =>{
        fetch('https://pearl-bistro-server.vercel.app/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    })
    return (
        <section className="mt-10 mb-10">
            <SectionTitle
            subHeading={"What Our Client Say"}
            heading={"Reviews"}>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                    key={review._id}
                    >
                        <div className="flex flex-col items-center">
                            <Rating
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                            />
                            <p className="mt-4 ps-10 pe-10 md:ps-16 md:pe-16 lg md:p-2 text-sm">{review.details}</p>
                            <h3 className="text-2xl mt-2 text-yellow-700">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;