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

        <div>
                    <a href="https://assignment-11-da68c.web.app/"><button className='btn btn-info mt-4'>Review</button></a>
                    </div>
    </div>
    );
};

export default TourismDetails;