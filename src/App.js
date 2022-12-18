import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/download" element={<Download/>}/>
            </Routes>
        </Router>
    )
}

export default App;
