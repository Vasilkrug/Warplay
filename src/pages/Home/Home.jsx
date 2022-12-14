import React from 'react';
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import {sliderImages} from "../../assets/img/slides/assets";
import HowItWork from "../../components/HowItWork/HowItWork";
import StartPlayingDescription from "../../components/StartPlayingDescription/StartPlayingDescription";
import Locations from "../../components/Locations/Locations";
import Footer from "../../components/Footer/Footer";
import BrowserPlay from "../../components/BrowserPlay/BrowserPlay";

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider sliderImages={sliderImages}/>
            <HowItWork/>
            <StartPlayingDescription/>
            <BrowserPlay/>
            <Locations/>
            <Footer/>
        </div>
    );
};

export default Home;