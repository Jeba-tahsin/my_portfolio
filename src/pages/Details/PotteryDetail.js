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

            <div className='mt-5'>
                <ul>
                    <li className='text-start'>This website is related niche product like vase which is online shop base.</li>
                    <li className='text-start'>Using firebase, mongoDb, react, bootstrap, node js, express js.</li>
                    <li className='text-start'>Having admin management system.</li>
                    <li className='text-start'>Admin and user differently can use this site properly.</li>
                    <li className='text-start'>Admin can delete, add products.</li>
                    <li className='text-start'>User can see their booking status, also can put their feedback.</li>
                </ul>
            </div>

                <div>
                    <a href="https://pottery-12214.web.app/"><button className='btn btn-info mt-4'>Review</button></a>
                </div>
                <div>
                    <a href="https://github.com/Jeba-tahsin/pottery"><button className='btn btn-info mt-2'>Client Site</button></a>
                </div>
                <div>
                    <a href="https://github.com/Jeba-tahsin/pottery-server"><button className='btn btn-info mt-2'>Server Site</button></a>
                </div>
        </div>
    );
};

export default PotteryDetail;