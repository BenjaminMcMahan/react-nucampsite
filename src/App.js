import {useEffect} from "react";
import {useDispatch} from "react-redux";
import React from 'react';
import {Routes, Route} from "react-router-dom";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import {fetchCampsites} from "./features/campsites/campsitesSlice";
import {fetchPartners} from "./features/partners/partnersSlice";
import {fetchPromotions} from "./features/promotions/promotionsSlice";
import {fetchComments} from "./features/comments/commentsSlice";
import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="contact" element={<ContactPage/>}/>
                <Route path="directory" element={<CampsitesDirectoryPage/>}/>
                {/* Note - this will pass the campsiteId to the CampsiteDetailPage component */}
                <Route
                    path="directory/:campsiteId"
                    element={<CampsiteDetailPage/>}
                />
                <Route path="about" element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
