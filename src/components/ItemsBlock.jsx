import React, {useEffect, useState} from 'react';
import ItemsCard from "./ItemsCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {newPlants, all, sale, sort} from "../store/plantsSlice.js";
import not_found from '../assets/not-found.jpg'

function ItemsBlock({ setCurrentPage }) {

    const dispatch = useDispatch()
    const plants = useSelector(state => state.plants.plants)

    const [active, setActive] = useState(1)
    const [sortingType, setSortingType] = useState('')

    useEffect(() => {
        dispatch(sort(sortingType))
        setCurrentPage(1)
    }, [sortingType]);
    function changeOption(number, name) {
        setActive(number)
        dispatch(name())
        dispatch(sort(sortingType))
    }

    return (
        <div className='items-block'>
            <div className='items-block__sort-options'>
                <div className='sort-options__sort-buttons '>
                    <button className={active !== 1? 'sort-buttons__button' : 'sort-buttons__active-button'} onClick={() => changeOption(1, all)}>All Plants</button>
                    <button className={active !== 2? 'sort-buttons__button' : 'sort-buttons__active-button'} onClick={() => changeOption(2, newPlants)}>New Arrivals</button>
                    <button className={active !== 3? 'sort-buttons__button' : 'sort-buttons__active-button'} onClick={() => changeOption(3, sale)}>Sale</button>
                </div>
                <div className='sort-options__sort-select'>
                    <p>Sort by:</p>
                    <select onChange={(e) => setSortingType(e.target.value) }>
                        <option value='default'>Default sorting</option>
                        <option value='price'>Price sorting</option>
                    </select>
                </div>
            </div>
            <div className='items-block__items-grid'>
                {plants.map(el => {
                    return (
                        <ItemsCard key={el.id} el={el} />
                    )
                })}
            </div>
                {
                    plants.length ? null :
                        <div className='not-found-block'>
                            <h1 className='not-found'>Plants Not Found :(</h1>
                        </div>

                }
        </div>
    );
}

export default ItemsBlock;