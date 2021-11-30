import React from 'react';
import blood from '../../images/blood.PNG'; 
import pottery from '../../images/pottery.PNG'; 
import advanture from '../../images/advanture.PNG'; 
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='container' id='projects'>
            <h1>My Projects</h1>
           <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={blood} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Red Cross</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div>
                    <a href="https://red-cross-6853e.web.app/"><button className='btn btn-info mt-4'>View Website</button></a>
                    </div>
                      <Link to='/bloodDetails'><button className='btn btn-info m-2'>View Details</button></Link>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={pottery} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Pottery</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div>
                    <a href="https://pottery-12214.web.app/"><button className='btn btn-info mt-4'>View Website</button></a>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={advanture} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Advanture</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div>
                    <a href="https://assignment-11-da68c.web.app/"><button className='btn btn-info mt-4'>View Website</button></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;