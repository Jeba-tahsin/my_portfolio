import React from 'react';
import tourismBanner from '../../images/advExp.PNG';
import tourismLogin from '../../images/adv.PNG';
import tourismService from '../../images/advService.PNG';

const TourismDetails = () => {
    return (
        <div className='container'>
        <h1>Advanture details</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card">
                <div>
                <img src={tourismBanner} class="card-img-top img-fluid " alt="..."/>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <div>
                <img src={tourismLogin} class="card-img-top img-fluid " alt="..."/>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <div>
                <img src={tourismService} class="card-img-top img-fluid " alt="..."/>
                </div>
                </div>
            </div>
        </div>

        <div className='mt-5'>
                <ul>
                    <li className='text-start'>This website is about travel and tour .</li>
                    <li className='text-start'>Having google sign in and online booking system.</li>
                    <li className='text-start'>User can delete their booking, also show their phone number.</li>
                    <li className='text-start'>Voluntary team can contact by website.</li>
                    <li className='text-start'>Using react, firebase, bootstrap, node js, express js, mongoDb.</li>
                </ul>
            </div>

                <div>
                    <a href="https://assignment-11-da68c.web.app/"><button className='btn btn-info mt-4'>Review</button></a>
                </div>
                <div>
                <a href="https://github.com/Jeba-tahsin/tourism"><button className='btn btn-info mt-2'>Client Site</button></a>
                </div>
                <div>
                <a href="https://github.com/Jeba-tahsin/tourism-server"><button className='btn btn-info mt-2'>Server Site</button></a>
                </div>
    </div>
    );
};

export default TourismDetails;