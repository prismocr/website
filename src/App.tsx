import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Features from './views/Features';
import Landing from './views/Landing';

export default function App(props: any) {
    return (
        <div>
            <Navbar/>
            <Landing/>
            <Features/>
            <Footer/>
        </div>
    )
}