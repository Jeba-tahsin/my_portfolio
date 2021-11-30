import React from 'react';
import tourismBanner from '../../images/blood.PNG';
import tourismLogin from '../../images/bloodLogin.PNG';
import tourismService from '../../images/bloodService.PNG';

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
    </div>
    );
};

export default TourismDetails;