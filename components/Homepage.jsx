import React, { useState, useEffect } from 'react';
import CollectionSection from './subsections/CollectionSection';
import Header from './subsections/Header';
import HeroSection from './subsections/HeroSection';

function Homepage() {
    return (
        <section className="dark:bg-darkBg bg-lightBg">
            <Header />
            <HeroSection />
            <CollectionSection/>
        </section>
    );
}

export default Homepage;
