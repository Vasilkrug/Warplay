import React  from 'react';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import {sliderImages} from "./assets/img/slides/assets";


const App = () => {

    return (
        <div>
            <Header/>
            <Slider sliderImages={sliderImages}/>
        </div>
    )
}

export default App;
