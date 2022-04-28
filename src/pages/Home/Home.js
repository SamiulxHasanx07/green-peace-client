import React from 'react';
import AllEvents from '../Events/AllEvents/AllEvents';

import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div style={{marginTop:'-100px'}}>

                <AllEvents></AllEvents>
            </div>
        </div>
    );
};

export default Home;