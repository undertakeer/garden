import React, {useState} from 'react';
import {search, logo, cart, logout} from "../assets/index.js";
import {useSelector} from "react-redux";
import {Modal} from "antd";
import Cart from "./Cart.jsx";
import {toast, ToastContainer} from "react-toastify";


function NavBar({ setIsOpen, isOpen, setFirstLoad }) {

    const [active, setActive] = useState(1)
    const cartItems = useSelector(state => state.plants.cartItems)

    function showShotter() {
        setIsOpen(true)
        setFirstLoad(false)
    }



    return (
        <>
            <div className='navbar'>
                <div className='navbar__logo-block'>
                    <img src={logo} alt=""/>
                    <h3>GREENSHOP</h3>
                </div>
                <div className='navbar__list-block'>
                    <ul className='list__block-ul'>
                        <li onClick={() => setActive(1)} className={`${active === 1? 'block-ul__active': null}`} >Home</li>
                        <li onClick={() => setActive(2)} className={`${active === 2? 'block-ul__active': null}`}>Shop</li>
                        <li onClick={() => setActive(3)} className={`${active === 3? 'block-ul__active': null}`}>Plant Care</li>
                        <li onClick={() => setActive(4)} className={`${active === 4? 'block-ul__active': null}`}>Blogs</li>
                    </ul>
                </div>
                <div className='navbar__buttons-block'>
                    <button className='buttons__block-search'>
                        <img className='sm-icon' src={search} alt=""/>
                    </button>
                    <button onClick={showShotter} className='buttons__block-cart'>
                        <img className='sm-icon' src={cart} alt=""/>
                        {!cartItems.length ? null :
                            <div>
                                <p>{cartItems.length}</p>
                            </div>
                        }
                    </button>
                    <button className='buttons__block-logout'>
                        <img src={logout} alt=""/>
                        <div>Login</div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;