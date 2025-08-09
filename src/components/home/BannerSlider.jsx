// src/components/BannerSlider.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'; // Optional: if you want pagination dots
import 'swiper/css/navigation'; // Optional: if you want navigation arrows

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerSlider = () => {
    const slides = [
        {
            id: 1,
            image: 'https://i.pinimg.com/736x/53/bd/1f/53bd1ff6f05cc5313944d53d47bc7b05.jpg',
            alt: 'Summer Sale Banner',
            heading: 'Summer Sale Extravaganza!',
            subheading: 'Up to 50% off on all collections.',
            link: '/summer-sale',
        },
        {
            id: 2,
            image: 'https://i.pinimg.com/736x/53/bd/1f/53bd1ff6f05cc5313944d53d47bc7b05.jpg',
            alt: 'New Arrivals Banner',
            heading: 'Discover Our New Arrivals',
            subheading: 'Fresh styles just for you.',
            link: '/new-arrivals',
        },
        {
            id: 3,
            image: 'https://i.pinimg.com/1200x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg',
            alt: 'Electronics Deals Banner',
            heading: 'Unbeatable Electronics Deals',
            subheading: 'Grab yours before they are gone!',
            link: '/electronics-deals',
        },
    ];

    return (
        // This wrapper is now full width
        <div className="w-full pt-3 sm:px-5 relative overflow-hidden rounded-2xl">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[400px] w-full rounded-2xl"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="relative w-full h-full bg-cover bg-center flex items-center justify-center text-white"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="w-full h-full flex justify-center items-center text-center bg-black/70 bg-opacity-50 p-6 rounded-lg">
                                <div>
                                    <h2 className="text-4xl font-bold mb-2">{slide.heading}</h2>
                                    <p className="text-xl mb-4">{slide.subheading}</p>
                                    <a
                                        href={slide.link}
                                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                                    >
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerSlider;