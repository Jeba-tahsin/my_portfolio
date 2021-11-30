import React from 'react';
import banner from '../../images/blood.PNG';
import bloodLogin from '../../images/bloodLogin.PNG';
import bloodService from '../../images/bloodService.PNG';

const BloodDetails = () => {
    return (
        <div>
            <h1>Blood bank details</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={banner} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={bloodService} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={bloodLogin} class="card-img-top img-fluid image" alt="..."/>
                    </div>
                    </div>
                </div>

            </div>
            {/* <img src={banner} alt="" srcset="" />
            <img src={bloodService} alt="" srcset="" />
            <img src={bloodLogin} alt="" srcset="" /> */}
        </div>
    );
};

export default BloodDetails;