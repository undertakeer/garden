import React, {useRef, useState} from 'react';
import {sale_png} from "../assets/index.js";
import List from "./List.jsx";
import {useDispatch, useSelector} from "react-redux";
import InputRange from "./InputRange.jsx";
import {priceFilter} from "../store/plantsSlice.js";

function Sort(props) {

    const [rangeValue, setRangeValue]  = useState(40)
    const categories = useSelector(state => state.plants.categories)

    const size = useSelector(state => state.plants.size)
    const dispatch = useDispatch()

    return (
        <div>
            <div className='sort-block'>
                <List text='Categories' arr={categories}/>
                <div className='price-rage'>
                    <h3>Price Range</h3>
                    <div className='price-rage__controls'>
                        <div className='controls__input'>
                            <InputRange setRangeValue={setRangeValue} rangeValue={rangeValue} />
                        </div>
                        <p>Price: <span>$39 - ${rangeValue}</span></p>
                        <button onClick={() => dispatch(priceFilter(rangeValue))}>Filter</button>
                    </div>
                </div>
                <List text='Size' arr={size}/>
                <div className='sale-post'>
                    <img src={sale_png} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Sort;