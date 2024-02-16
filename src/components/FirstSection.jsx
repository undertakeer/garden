import React, {useEffect, useState} from 'react';
import {ConfigProvider, Pagination} from "antd";
import Sort from "./Sort.jsx";
import ItemsBlock from "./ItemsBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {pagination} from "../store/plantsSlice.js";
import {current} from "@reduxjs/toolkit";

function FirstSection(props) {

    const allPlants = useSelector(state => state.plants.allPlants )
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1)
    }, [allPlants]);

    const dispatch = useDispatch()

    function changePagination (e) {
        setCurrentPage(e)
        dispatch(pagination(e))
    }

    return (
        <section className='section-1'>
            <div className='section-1__main-block'>
                <Sort />
                <ItemsBlock setCurrentPage={setCurrentPage} />
            </div>
            <div>
                <ConfigProvider theme={{
                    token: {
                        colorPrimary: '#46A358',
                    }
                }}>
                    <Pagination current={currentPage}
                                onChange={(e) => changePagination(e)}
                                defaultPageSize={9}
                                defaultCurrent={1}
                                total={allPlants.length}
                    />
                </ConfigProvider>
            </div>
        </section>
    );
}

export default FirstSection;