import React from 'react';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import Slide from "../Slide/Slide";
import './Slider.css';

const Slider = ({sliderImages}) => {

    return (
        <section className="slider">
            <Swiper
                modules={[Autoplay]}
                autoplay={true}
                speed={800}
                slidesPerView={1}
                loop
                className='my_swiper'
                spaceBetween={50}
            >
                {sliderImages.map(image => (
                    <SwiperSlide key={image}>
                        <Slide image={image}/>
                    </SwiperSlide>)
                )}
            </Swiper>
        </section>
    );
};

export default Slider;