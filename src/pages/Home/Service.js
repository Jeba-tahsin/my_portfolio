import React from 'react';
import './Service.css';
import webDev from '../../images/web-dev.png';
import webDesign from '../../images/web-design.png';
import debug from '../../images/debug.jpg';

const Service = () => {
    return (
        <div className='container' id='service'>
            <h1 className='mt-5 mb-4'>Services from me</h1>
           <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card border-0">
                    <div>
                    <img src={webDev} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Web Design</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                    <div>
                    <img src={webDesign} class="card-img-top img-fluid image2" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Web Design</h5>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card border-0">
                    <div>
                    <img src={debug} class="card-img-top img-fluid image2" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Bug Fixing</h5>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;