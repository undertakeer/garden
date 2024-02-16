import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {all, category, sizeFilter} from "../store/plantsSlice.js";

function List({ arr, text}) {

    const [active, setActive] = useState(null)
    const dispatch = useDispatch()

    function changeCatogry (id, name, listName) {
        if (active === id) {
            setActive(null)
            listName === 'Categories' ? dispatch(category(name)) : dispatch(sizeFilter(name))
            dispatch(all())
            return
        }
        if (listName === 'Categories') {
            dispatch(category(name))
        } else dispatch(sizeFilter(name))
        setActive(id)

    }


    return (
        <div className='list-component'>
            <h3>{text}</h3>
            <ul className='sort__ul'>
                {arr.map(el => {
                    return (
                        <li className='sort__li' key={el.id}>
                            <button className={active !== el.id? 'li__inactive-button':
                                'li__active-button'} onClick={() => changeCatogry(el.id, el.name, text)}>
                                <p>{el.name}</p>
                                <p>({el.count})</p>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default List;