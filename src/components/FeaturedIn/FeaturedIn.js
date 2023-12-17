import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
import './FeaturedIn.css';

const FeaturedIn = () => {
    return (
        <div className='featureIn__container'>
            <h3>FEATURED IN</h3>
            <div className='featureIn__companies'>
                <div>Seventeen</div>
                <div>POPSUGAR.</div>
                <div>Cosmopolitan</div>
                <div>teenVOGUE</div>
                <div>Refinery29</div>
                <div>InStyle</div>
            </div>
            <p>Over 810,000 Customer Reviews</p>
            <div>
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
                <AiTwotoneStar />
            </div>
        </div>
    )
}

export default FeaturedIn
