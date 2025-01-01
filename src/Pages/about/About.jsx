import React from 'react';
import aboutImg from '../../assets/home/chef-service.jpg';

const About = () => {
    return (
        <div 
            className="bg-cover bg-center bg-no-repeat h-[300px] md:h-[500px] md:mt-20"
            style={{ backgroundImage: `url(${aboutImg})` }}
        >
            {/* Center content within the parent div */}
            <div className="flex items-center justify-center h-full">
                <div className="text-center p-10 bg-white bg-opacity-30 backdrop-blur-md rounded-lg w-4/5 mx-auto text-black">
                    <h1 className="text-4xl font-bold">Pearl Bistro</h1>
                    <p className="mt-4 text-lg">Welcome to Pearl Bistro, where culinary excellence meets cozy ambiance. We offer a diverse range of delicious dishes that will satisfy every craving. From sizzling pizzas and savory kebabs to delectable desserts and refreshing drinks, there's something for everyone at our table. Whether you're in the mood for a hearty soup or a light snack, we've got you covered.
                    At Pearl Bistro, we take pride in creating a welcoming space where you can enjoy your meals with a twist. For a truly unique experience, indulge in shisha while you dine, creating the perfect atmosphere for relaxation and enjoyment.
                    And for those who prefer to enjoy our delicious offerings from the comfort of their home, we offer the convenience of online ordering. Simply browse our menu, order your favorites, and we'll deliver everything straight to your door.
                    No matter what you're craving, Pearl Bistro is here to bring you an unforgettable dining experience, both in-house and online.</p>
                </div>
            </div>
        </div>
    );
};

export default About;

