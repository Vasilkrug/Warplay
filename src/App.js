import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Download from "./pages/Download/Download";
import Contacts from "./pages/Contacts/Contacts";
import Subscriptions from "./pages/Subscriptions/Subscriptions";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/download" element={<Download/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/subscriptions" element={<Subscriptions/>}/>
            </Routes>
        </Router>
    )
}

export default App;
