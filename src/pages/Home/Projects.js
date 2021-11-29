import React from 'react';
import blood from '../../images/blood.PNG'; 

const Projects = () => {
    return (
        <div className='container'>
            <h1>My Projects</h1>
           <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <div>
                    <img src='' class="card-img-top img-fluid image" alt="..."/>
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
                    <img src='' class="card-img-top img-fluid image" alt="..."/>
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
                    <img src='' class="card-img-top img-fluid image" alt="..."/>
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

export default Projects;