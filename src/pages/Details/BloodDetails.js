import React from 'react';
import banner from '../../images/blood.PNG';
import bloodLogin from '../../images/bloodLogin.PNG';
import bloodService from '../../images/bloodService.PNG';

const BloodDetails = () => {
    return (
        <div className='container'>
            <h1>Blood bank details</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <div>
                    <img src={banner} class="card-img-top img-fluid " alt="..."/>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={bloodService} class="card-img-top img-fluid " alt="..."/>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={bloodLogin} class="card-img-top img-fluid " alt="..."/>
                    </div>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <ul>
                    <li className='text-start'>This site is healthcare related about blood donate, connect,related volunteer.</li>
                    <li className='text-start'>Firebase authentication with google sign in, register system.</li>
                    <li className='text-start'>Types of blood group, who can gives and receives.</li>
                    <li className='text-start'>Using bootstrap, firebase, mongoDb, react, node js, express js.</li>
                </ul>
            </div>

                <div>
                    <a href="https://red-cross-6853e.web.app/"><button className='btn btn-info mt-4'>Review</button></a>
                </div>
                <div>
                <a href="https://github.com/Jeba-tahsin/blood-bank"><button className='btn btn-info mt-2'>Clint site</button></a>
                </div>
        </div>
    );
};

export default BloodDetails;