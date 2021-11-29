import React from 'react';
import './Service.css';
import webDev from '../../images/web-dev.png';
import webDesign from '../../images/web-design.png';
import debug from '../../images/debug.jpg';

const Service = () => {
    return (
        <div className='container'>
            <h1>My Services</h1>
           <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={webDev} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Web Development</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={webDesign} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Web Design</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={debug} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Bug Fixing</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;