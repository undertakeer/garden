import React, {useEffect, useState} from 'react';
import NavBar from "./components/NavBar.jsx";
import Swiper from "./components/Swiper.jsx";
import {Button, Carousel, ConfigProvider} from "antd";
import 'antd/dist/reset.css';
import FirstSection from "./components/FirstSection.jsx";
import Secondsection from "./components/SecondSection.jsx";
import ThirdSection from "./components/ThirdSection.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";

function App(props) {

    const [isOpen, setIsOpen ] = useState(false)
    const [firstLoad, setFirstLoad ] = useState(true)

    
    return (
        <div className='container'>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} setFirstLoad={setFirstLoad} />
            <ConfigProvider theme={{
                components: {
                    Carousel: {
                        colorBgContainer: 'green',
                        borderRadius: '50px',
                        dotHeight: 10,
                        dotWidth: 10,
                        dotActiveWidth: 10
                    }
                }
            }}>
                <Carousel>
                    <Swiper />
                    <Swiper />
                    <Swiper />
                </Carousel>
            </ConfigProvider>
            <div className='sections'>
                <FirstSection />
                <Secondsection />
                <ThirdSection />
            </div>
            <Footer />
            <Cart isOpen={isOpen} setIsOpen={setIsOpen} firstLoad={firstLoad} setFirstLoad={setFirstLoad}  />

        </div>
    );
}

export default App;