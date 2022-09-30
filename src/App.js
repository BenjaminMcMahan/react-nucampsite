import React from 'react';
import {Routes, Route} from "react-router-dom";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import './App.css';
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='contact' element={<ContactPage/>}/>
                <Route path='directory' element={<CampsitesDirectoryPage/>}/>
                {/* Note - this will pass the campsiteId to the CampsiteDetailPage component */}
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage/>}
                />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
