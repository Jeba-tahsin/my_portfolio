import React from 'react';
import banner from '../../images/blood.PNG';
import bloodLogin from '../../images/bloodLogin.PNG';
import bloodService from '../../images/bloodService.PNG';

const PotteryDetail = () => {
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
        </div>
    );
};

export default PotteryDetail;