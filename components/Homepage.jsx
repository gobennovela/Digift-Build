import React, { useState, useEffect } from 'react';
import CollectionSection from './subsections/CollectionSection';
import Footer from './subsections/Footer';
import Header from './subsections/Header';
import HeroSection from './subsections/HeroSection';

function Homepage() {
    return (
        <section className="dark:bg-darkBg bg-lightBg">
            <Header />
            <HeroSection />
            <CollectionSection/>
            <Footer/>
        </section>
    );
}

export default Homepage;
