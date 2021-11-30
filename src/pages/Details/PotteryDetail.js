import React from 'react';
import pottery from '../../images/pottery.PNG';
import potteryAbt from '../../images/potteryAbt.PNG';
import potteryDash from '../../images/potteryDash.PNG';

const PotteryDetail = () => {
    return (
        <div className='container'>
            <h1>Blood bank details</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={pottery} class="card-img-top img-fluid " alt="..."/>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={potteryAbt} class="card-img-top img-fluid " alt="..."/>
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div>
                    <img src={potteryDash} class="card-img-top img-fluid " alt="..."/>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PotteryDetail;