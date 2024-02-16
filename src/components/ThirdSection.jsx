import React from 'react';
import {
    arrow,
    section_3_flower_1,
    section_3_flower_2,
    section_3_flower_3,
    section_3_flower_4
} from "../assets/index.js";

function ThirdSection(props) {

const itemsArr = [
    {
        id: 0,
        date: 'September 12 | Read in 6 minutes',
        text: 'Cactus & Succulent Care Tips',
        title: 'Cacti are succulents are easy care plants for any home or patio.',
        img: section_3_flower_1,
    },
    {
        id: 1,
        date: 'September 13 | Read in 2 minutes',
        text: 'Top 10 Succulents for Your Home',
        title: 'Best in hanging baskets. Prefers medium to high light.',
        img: section_3_flower_2,
    },
    {
        id: 2,
        date: 'September 15 | Read in 3 minutes',
        text: 'Cacti & Succulent Care Tips',
        title: 'Cacti and succulents thrive in containers and because most are..',
        img: section_3_flower_3,
    },
    {
        id: 3,
        date: 'September 15 | Read in 2 minutes',
        text: 'Best Houseplants Room by Room',
        title: 'The benefits of houseplants are endless. In addition to..',
        img: section_3_flower_4,
    },
]

    return (
        <section className='third-section'>
            <div className='third-section__title'>
                <h1>Our Blog Posts</h1>
                <p className='gray-text'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className='third-section__blogs'>
                {itemsArr.map(el => {
                    return (
                        <div className='blogs__blog' key={el.id}>
                            <img src={el.img} alt=""/>
                            <div className='blog__info'>
                                <p>
                                    <span>{el.date}</span>
                                </p>
                                <h2>{el.text}</h2>
                                <p className='gray-text'>{el.title}</p>
                                <button>
                                    <p>Read More</p>
                                    <h1>&#129042;</h1>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </section>
    );
}

export default ThirdSection;