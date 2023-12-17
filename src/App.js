import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Trending from './components/navbar/subNavs/shop/trending/Trending';
import Gift from './components/navbar/subNavs/shop/gift/Gift';
import Jwelery from './components/navbar/subNavs/shop/jwelery/Jwelery';
import Clothing from './components/navbar/subNavs/shop/clothing/Clothing';
import Accessories from './components/navbar/subNavs/shop/accessories/Accessories';
import Colab from './components/navbar/subNavs/shop/colab/Colab';

import Charm from './components/navbar/subNavs/custom/charm/Charm';
import Engrave from './components/navbar/subNavs/custom/engrave/Engrave';
import Bracelet from './components/navbar/subNavs/custom/bracelet/Bracelet';
import Ring from './components/navbar/subNavs/custom/ring/Ring';

import BraceletSale from './components/navbar/subNavs/sale/bracelet/Bracelet';
import JwelerySale from './components/navbar/subNavs/sale/jwelery/Jwelery';
import RingSale from './components/navbar/subNavs/sale/ring/Ring';

import PuraVida from './components/navbar/subNavs/brand/puravida/PuraVida';
import Myntra from './components/navbar/subNavs/brand/myntra/Myntra';
import Shoppis from './components/navbar/subNavs/brand/shoppis/Shoppis';
import Kool from './components/navbar/subNavs/brand/kool/Kool';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import NewArrival from './pages/newArrivals/NewArrival';
import Subscription from './pages/subscription/Subscription';
import Rewards from './pages/rewards/Rewards';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/new-arrival' element={<NewArrival />} />
        <Route path='/subscription' element={<Subscription />} />
        <Route path='/rewards' element={<Rewards />} />
        <Route path='/products' />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/shop/trending' element={<Trending />} />
        <Route path='/shop/gift' element={<Gift />} />
        <Route path='/shop/jwellery' element={<Jwelery />} />
        <Route path='/shop/clothing' element={<Clothing />} />
        <Route path='/shop/accessories' element={<Accessories />} />
        <Route path='/shop/colab' element={<Colab />} />

        <Route path='/custom/charm' element={<Charm />} />
        <Route path='/custom/engrave' element={<Engrave />} />
        <Route path='/custom/bracelet' element={<Bracelet />} />
        <Route path='/custom/ring' element={<Ring />} />

        <Route path='/sale/bracelet' element={<BraceletSale />} />
        <Route path='/sale/jwellery' element={<JwelerySale />} />
        <Route path='/sale/ring' element={<RingSale />} />

        <Route path='/brand/puradiva' element={<PuraVida />} />
        <Route path='/brand/myntra' element={<Myntra />} />
        <Route path='/brand/shoppis' element={<Shoppis />} />
        <Route path='/brand/kool' element={<Kool />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
