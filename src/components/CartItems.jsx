import React from 'react';
import {useDispatch} from "react-redux";
import {minusItem, plusItem} from "../store/plantsSlice.js";

function CartItems({ el }) {

    const dispatch = useDispatch()


    return (
        <div className='cart-item'>
            <img src={el.item.img} alt=""/>
            <div className='cart-item__buttons'>
                <button onClick={() => dispatch(minusItem(el.item.id))}>‒</button>
                <p>{el.count}</p>
                <button onClick={() => dispatch(plusItem(el.item.id))}>+</button>
            </div>
            <h3>{(el.item.price * el.item.sale * el.count).toFixed(2)}</h3>
        </div>
    );
}

export default CartItems;