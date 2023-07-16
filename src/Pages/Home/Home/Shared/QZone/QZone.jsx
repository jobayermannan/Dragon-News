import React from 'react';
import img1 from "../../../../../assets/qZone1.png"
import img2 from "../../../../../assets/qZone2.png"
import img3 from "../../../../../assets/qZone3.png"

const QZone = () => {
    return (
        <div className='text-center py-4 my-4  bg-secondary'>
            <h2>Q-Zone</h2>
            <img src={img1}></img>
            <img src={img2}></img>
            <img src={img3}></img>
        </div>
    );
};

export default QZone;