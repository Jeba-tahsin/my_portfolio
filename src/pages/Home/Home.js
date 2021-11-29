import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Header from './Header';
import Projects from './Projects';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;