import React from 'react';
import {
    calling,
    Facebook,
    Instagram, Linkedin,
    location,
    logo,
    message, pay_icons,
    type_plants_img,
    type_plants_img_2, Union
} from "../assets/index.js";


const plantsTypeArr = [
    {
        id: 0,
        img: type_plants_img,
        text: 'Garden Care',
    },
    {
        id: 1,
        img: type_plants_img_2,
        text: 'Plant Renovation',
    },
    {
        id: 2,
        img: type_plants_img,
        text: 'Watering Graden',
    },
]

const companyInfoArr = [
    {
        id: 0,
        img: location,
        text: '70 West Buckingham Ave. Farmingdale, NY 11735',
    },
    {
        id: 1,
        img: message,
        text: 'contact@greenshop.com',
    },
    {
        id: 2,
        img: calling,
        text: '+88 01911 717 490',
    },
]

const companyLinks = [
    {
        id: 0,
        title: 'My Account',
        links: ['My Account', 'Our stores', 'Contact us', 'Career', 'Specials']
    },
    {
        id: 1,
        title: 'Help & Guide',
        links: ['Help Center', 'How to Buy', 'Shipping & Delivery', 'Product Policy', 'How to Return']
    },
    {
        id: 2,
        title: 'Categories',
        links: ['House Plants', 'Potter Plants', 'Seeds', 'Small Plants', 'Accessories']
    },
]

const companySocial = [
    {
        id: 0,
        img: Facebook,
    },
    {
        id: 1,
        img: Instagram,
    },
    {
        id: 2,
        img: Linkedin,
    },
    {
        id: 3,
        img: Union,
    },
]
function Footer(props) {
    return (
        <div>
            <footer>
                <div className='footer-top-block'>
                    <div className='top-block__plants-type'>
                        {plantsTypeArr.map(el => {
                            return (
                                <div key={el.id}
                                     className={el.id !== 2 ? 'plants-type__item right_border' : 'plants-type__item'}>
                                    <div className='item__img-block'>
                                        <img src={el.img} alt=""/>
                                        <div className='img-block__absolute-circle'></div>
                                    </div>
                                    <h3>{el.text}</h3>
                                    <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='top-block__form-block'>
                        <h2>Would you like to join newsletters?</h2>
                        <form action="#">
                            <input type="text" placeholder='enter your email address...'/>
                            <button type='submit'>Join</button>
                        </form>
                        <p>
                            We usually post offers and challenges in newsletter. We’re your online houseplant
                            destination. We offer a wide range of houseplants and accessories shipped directly from our
                            (green)house to yours!
                        </p>
                    </div>
                </div>
                <div className='footer-middle-block'>
                    <div className='navbar__logo-block'>
                        <img src={logo} alt=""/>
                        <h3>GREENSHOP</h3>
                    </div>
                    <div className='middle-block__props-block'>
                        {companyInfoArr.map(el => {
                            return (
                                <div key={el.id} className='props-block__props'>
                                    <img src={el.img} alt=""/>
                                    <p>{el.text}</p>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className='footer-bottom-block'>
                    <div className='bottom-block__link-blocks'>
                        {companyLinks.map(el => {
                            return (<div key={el.id} className='link-blocks__block'>
                                <h2>{el.title}</h2>
                                <ul className='links-ul'>{el.links.map((el, index) => {
                                    return <li key={index}>{el}</li>
                                })}
                                </ul>
                            </div>)
                        })}
                    </div>
                    <div className='bottom-block__media-block'>
                        <div className='media-block__social-block'>
                            <h2>Social Media</h2>
                            <div className='social-block__socials'>
                                {companySocial.map(el => {
                                    return(
                                        <div key={el.id} className='socials__social'>
                                            <img src={el.img} alt=""/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='media-block__pay-block'>
                            <h2>We accept</h2>
                            <img src={pay_icons} alt=""/>
                        </div>
                    </div>
                </div>
                <hr/>
                <p className='company-year'>© 2021 GreenShop. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;