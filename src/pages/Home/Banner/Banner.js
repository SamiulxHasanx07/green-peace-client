import React from 'react';
import bannerBg from '../../../images/banner-bg.jpg'
const Banner = () => {
    return (
        <div className='banner-area d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${bannerBg})` }}>
            <div>
                <h2 className='text-center'>I grow by helping people in need.</h2>
                <div className='d-flex justify-content-center my-5'>
                    <input style={{ borderRadius: '10px 0 0 10px', border:'1px solid #D6D6D6'}} className='w-75 py-2' type="text" name="search" id="" />
                    <input style={{ borderRadius: '0 10px 10px 0' }} className='btn btn-primary' type="submit" value="Search" />
                </div>
            </div>
        </div>
    );
};

export default Banner;