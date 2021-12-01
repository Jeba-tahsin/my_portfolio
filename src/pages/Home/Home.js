import React from 'react';
import Footer from '../Footer/Footer';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Service from './Service';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Service></Service>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;