import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeaturedIn from '../../components/FeaturedIn/FeaturedIn';
import ShopCard from '../../components/ShopCard/ShopCard';
import ProductCard from '../../components/productCard/ProductCard';
import { fetchProducts } from '../../redux/product-slice';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    let showprod = product.productsList.itemsList;

    return (
        <div className='home__container'>
            <img src='https://cdn.shopify.com/s/files/1/0297/6313/files/3.28_Melrose_HPHero_desktop_2560x1200_2_wgradient-min.progressive.jpg?v=1680019668' alt='bags' className='home__img' />
            <div className='text__photo'>
                <p className='text__p'>NEW ARRIVALS</p>
                <span className='text__l' >HANDPICKED COLLECTION</span>
                <p className='text__p'>Unlock your inner beauty.</p>
                <button className='home__btn'>SHOP NOW</button>
            </div>

            <div className='home__contentContainer'>
                <div>
                    <h2>RECOMMENDED FOR YOU</h2>
                    <div className='home__foryou'>
                        <div>New Arrivals</div>&nbsp;&nbsp;
                        <div>Best Sellers</div>&nbsp;&nbsp;
                        <div>Friendship Packs</div>
                    </div>
                    {
                        product.isLoading
                    }
                    <div className='home__prods'>
                        {showprod &&
                            showprod.map((item, id) => {
                                return <ProductCard key={id} name={item.name} price={item.price} img={item.img} />
                            })
                        }
                    </div>
                </div>

                <div>
                    <FeaturedIn />
                </div>
                <div>
                    <ShopCard />
                </div>

            </div>
        </div>
    )
}

export default Home