import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FiSearch } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { brandDrop, customDrop, saleDrop, shopDrop, userDrop } from './NavDropItems';

const Navbar = () => {
    const [navDropSelect, setNavDropSelect] = useState('');
    const [navDropItems, setNavDropItems] = useState([]);
    const navigate = useNavigate();


    const handleMouseOver = (e) => {
        const ele = document.getElementsByClassName('nav__overlay');
        ele[0].style.display = "block";
        const val = document.getElementById(e.target.id);
        setNavDropSelect(val.innerText);
    }

    const handleMouseOverUser = () => {
        const ele = document.getElementsByClassName('nav__overlay');
        ele[0].style.display = "block";
        setNavDropSelect('USER');
    }

    const handleMouseOut = () => {
        const ele = document.getElementsByClassName('nav__overlay');
        ele[0].style.display = "none";
    }

    const noNavDropDown = () => {
        const ele = document.getElementsByClassName('nav__overlay');
        ele[0].style.display = "none";
        setNavDropSelect('');
    }

    const handleDropClick = () => {
        const ele = document.getElementsByClassName('nav__overlay');
        ele[0].style.display = "block";
    }

    const handleAfterClick = () => {
        const ele = document.getElementsByClassName('nav__overlay');
        ele[0].style.display = "none";
    }

    const handleNewArrClick = () => {
        navigate('/new-arrival');
    }

    const handleSubscriptionClick = () => {
        navigate('/subscription');
    }

    useEffect(() => {
        const switchForNav = () => {
            switch (navDropSelect) {
                case 'SHOP':
                    return setNavDropItems(shopDrop);
                case 'CUSTOM':
                    return setNavDropItems(customDrop);
                case 'SALE':
                    return setNavDropItems(saleDrop);
                case 'BRAND':
                    return setNavDropItems(brandDrop);
                case 'USER':
                    return setNavDropItems(userDrop);
                default:
                    return setNavDropItems([]);
            }
        }
        switchForNav();
    }, [navDropSelect]);

    return (
        <div onMouseLeave={handleMouseOut}>
            <div className='nav__container'>
                <div className='nav__one'>
                    <Link to='/' className='nav__item' id='home__logo' onMouseOver={noNavDropDown} >puravida</Link>
                </div>
                <div className='nav__middle' >
                    <div className='nav__item' id='nav__newArr' onClick={handleNewArrClick} onMouseOver={noNavDropDown} >New Arrivals</div>
                    <div className='nav__item' id='nav__shop' onMouseOver={handleMouseOver}  >Shop</div>
                    <div className='nav__item' id='nav__custom' onMouseOver={handleMouseOver}  >Custom</div>
                    <div className='nav__item' id='nav__subs' onClick={handleSubscriptionClick} onMouseOver={noNavDropDown} >Subscriptions</div>
                    <div className='nav__item' id='nav__sale' onMouseOver={handleMouseOver}  >Sale</div>
                    <div className='nav__item' id='nav__brand' onMouseOver={handleMouseOver}  >Brand</div>
                </div>
                <div className='nav__last'>
                    <div className='nav__itemIcon' id='nav__search' onMouseOver={noNavDropDown} ><FiSearch /> </div>
                    <div className='nav__itemIcon' id='nav__user' onMouseOver={handleMouseOverUser} ><BiUser /> </div>
                    <div className='nav__itemIcon' id='nav__bag' onMouseOver={noNavDropDown} ><BsFillBagCheckFill /></div>
                </div>
            </div>
            <div className='nav__overlay'>
                <div onMouseOver={handleDropClick}>
                    {
                        navDropItems.map((item, id) => {
                            return (
                                <Link key={id} className='nav__dropItem' onClick={handleAfterClick} to={item.link}>{item.type}
                                </Link>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar;