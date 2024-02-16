import React from 'react';
import {header_big_flower, header_small_flower} from "../assets/index.js";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Swiper(props) {


    return (
        <div className='header'>
            <div className='header__left-side'>
                <div className='left-side__block'>
                    <h4>Welcome to GreenShop</h4>
                    <h1>
                        Let’s Make a <br/> Better <span>Planet</span>
                    </h1>
                    <p>
                        We are an online plant shop offering a wide range of cheap and trendy plants. Use <br />
                        our plants to create an unique Urban Jungle. Order your favorite plants!
                    </p>
                </div>
                <button>SHOP NOW</button>
            </div>
            <div className='header__right-side'>
                <div className='right-side__block'>
                    <img className='icon__small-icon' src={header_small_flower} alt=""/>
                    <img className='icons__big-icon' src={header_big_flower} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Swiper;