import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import LandingPage from './pages/landingpage.jsx';
import Gallery from './pages/Gallery.jsx';
import Prevevent from './pages/prevevent.jsx';

import Header from './components/Header.jsx';
import Footer from './components/footer.jsx';

function App() {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    
                    <Route path='/landingpage' element={<LandingPage/>}/>
                    <Route path='/Gallery' element={<Gallery/>}/>
                    <Route path='/Prevevent' element={<Prevevent/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;
