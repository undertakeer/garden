import React from 'react';
import {arrow, item_3, item_4} from "../assets/index.js";

const itemsArr = [
    {
        id: 0,
        text: `Summer cactus & succulents`,
        img: item_4,
    },
    {
        id: 1,
        text: `Styling Trends \n & much more`,
        img: item_3,
    },
]

function SecondSection(props) {
    return (
        <section className='second-section'>
            {itemsArr.map(el => {
                return (
                    <div className='second-section__block' key={el.id}>
                        <img src={el.img} alt=""/>
                        <div className='block__info'>
                            <div>
                                <h1>{el.text}</h1>
                                <p className='gray-text'>We are an online plant shop offering a wide <br /> range of cheap and trendy plants</p>
                            </div>
                            <button className=''>
                                <p>Find More</p>
                                <img src={arrow} alt=""/>
                            </button>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default SecondSection;