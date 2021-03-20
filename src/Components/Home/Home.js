import React from 'react';
import fakeData from '../../fakeData';
import Vehicle from '../Vehicle/Vehicle';

const Home = () => {
    const vehicles = fakeData;
    return (
        <div className='container'>
            <div className="row justify-content-between">
            {vehicles.map(vehicle => <Vehicle vahicle={vehicle}></Vehicle>)}
            </div>            
        </div>
    );
};

export default Home;