import React from 'react';
import {Autoplay} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import './Slider.css'

const Slider = () => {
    return (
        <section className="slider">
            <Swiper
            modules={[Autoplay]}
            autoplay={true}
            speed={800}
            slidesPerView={1}
            loop
            className='my_swiper'
            >
                <SwiperSlide className="swiper_slide">
                    <img src="/img/slides/god.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="swiper_slide">
                    <img src="/img/slides/pilot.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="swiper_slide">
                    <img src="/img/slides/ship.png" alt=""/>
                </SwiperSlide>
                <SwiperSlide className="swiper_slide">
                    <img src="/img/slides/stalker.png" alt=""/>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;