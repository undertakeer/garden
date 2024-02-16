import {useSelector} from "react-redux";
import CartItems from "./CartItems.jsx";
import {Bounce, toast, ToastContainer} from "react-toastify";
import React from "react";

function Cart({ setIsOpen, isOpen, firstLoad }) {

    const cartItems = useSelector(state => state.plants.cartItems)

    function buy () {
        toast.success('buy products!')
    }



    return (
        <>
            { firstLoad ? null :
                <div className={ isOpen ? 'shutter-blur-active': 'shutter-blur closed'}>
                    <div className='shutter-block'>
                        <div className={ isOpen ? 'shutter-wrapper-active': 'shutter-wrapper'}>
                            <div className='cart-height-block'>
                                <button className='cart-close-button' onClick={() => setIsOpen(false)}>close</button>
                                <h1>Your Cart</h1>
                            </div>
                            {cartItems.length?
                                <div className='cart-items'>
                                    {
                                        cartItems.map(el => {
                                            return (
                                                <CartItems key={el.item.id} el={el} />
                                            )
                                        })
                                    }
                                    <div className='buy-button-block'>
                                        <button onClick={buy} className='buy-button'>Buy</button>
                                    </div>
                                </div>:
                                <div className='not-products'>You have not products</div>
                            }

                        </div>
                    </div>
                    <ToastContainer
                        position="top-right"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition: Bounce
                    />
                </div>
            }
        </>
    );
}

export default Cart;