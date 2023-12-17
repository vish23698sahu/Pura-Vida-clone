import React from 'react';
import './ShopCard.css';
import one from '../media/on.jpg'
import two from '../media/tw.jpg'
import three from '../media/thr.jpg'
import four from '../media/fou.jpg'
import five from '../media/fiv.jpg'
import six from '../media/si.jpg'
import seven from '../media/sev.jpg'
import eight from '../media/eig.jpg'

const ShopCard = () => {
    return (
        <div className='shop__container'>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={one} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={two} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={three} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={four} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={five} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={six} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={seven} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>
            <div className='shop__wrapper'>
                <img className='shop__img1' alt='product' width='100%' src={eight} />
                <div className='overlay'>
                    <div className='content'>
                        <button className='shop__button'>Shop the Look</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ShopCard;