import React from 'react';
import {like_icon, search_button, shop_icon} from "../assets/index.js";
import {useDispatch} from "react-redux";
import {buy} from "../store/plantsSlice.js";

function ItemsCard({el}) {

    const dispatch = useDispatch()

    return (
        <div className='item-card-block'>
            <img src={el.img} alt=""/>
            <div className='item-card-block__info'>
                <p>{el.name}</p>
                <h3>
                    {
                        el.sale === 1 ?
                            <span>${el.price.toFixed(2)}</span>:
                            <div className='price-block'>
                                <span>${(el.price * el.sale).toFixed(2)}</span>
                                <p className='price-block__old-price'>${el.price.toFixed(2)}</p>
                            </div>

                    }
                </h3>
                <div className="button-container">
                    <button className="shop-button" onClick={() => dispatch(buy(el))}>
                        <img className='card-icon' src={shop_icon} alt=""/>
                    </button>
                    <button className="like-button">
                        <img className='card-icon' src={like_icon} alt=""/>
                    </button>
                    <button className="search-button">
                        <img className='card-icon' src={search_button} alt=""/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemsCard;