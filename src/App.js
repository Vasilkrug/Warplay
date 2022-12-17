import React  from 'react';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import {sliderImages} from "./assets/img/slides/assets";
import HowItWork from "./components/HowItWork/HowItWork";
import StartPlayingDescription from "./components/StartPlayingDescription/StartPlayingDescription";


const App = () => {

    return (
        <div>
            <Header/>
            <Slider sliderImages={sliderImages}/>
            <HowItWork/>
            <StartPlayingDescription/>
        </div>
    )
}

export default App;
