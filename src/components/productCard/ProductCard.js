import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ img, name, price }) => {
    const navigate = useNavigate();

    const handleImgClick = () => {
        navigate('/products');
    }

    return (
        <div className='prod__container'>
            <div className='prod__imgContainer'>
                <img src={img} className='prod__img' onClick={handleImgClick} width='400px' alt='bracelet' />
                <p className='prod__p'>{name}<br /> {price}</p>
            </div>
        </div>
    )
}

export default ProductCard;