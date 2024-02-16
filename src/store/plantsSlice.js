import {createSlice} from "@reduxjs/toolkit";
import {MAIN_ARR, plants, size, categories} from "../fakeData/index.js";


function updatePlants (state) {
    state.plants = state.allPlants.slice(0, 9)
}

function filterItems(state) {
    if (state.selectedSize || state.selectedPrice) {
        state.allPlants = state.allPlants.filter(item => {
            if(state.selectedCategory && !state.selectedSize) {
                return item.category === state.selectedCategory
            } else if (!state.selectedCategory && state.selectedSize) {
                return item.size === state.selectedSize
            } else if (state.selectedSize && state.selectedCategory) {
                return item.size === state.selectedSize && item.category === state.selectedCategory
            }
            return true
        });
    }


    if (state.selectedPrice) {
        state.allPlants = state.allPlants.filter(el => {
            return el.price * el.sale <= state.selectedPrice && el.price * el.sale >= 39
        })
    }
}

function filterCartItems (state) {
    state.cartItems = state.cartItems.filter(el => el.count !== 0)
}



const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        MAIN_ARR: MAIN_ARR,
        allPlants: MAIN_ARR,
        plants: plants,
        size: size,
        categories: categories,
        selectedCategory: '',
        selectedSize: '',
        selectedPrice: '',
        cartItems: [],
    },
    reducers: {
        pagination (state, action) {
            const startIndex = (action.payload - 1) * 9;
            const endIndex = startIndex + 9;
            state.plants =  state.allPlants.slice(startIndex, endIndex);

        },
        newPlants (state, action) {
            state.allPlants = state.MAIN_ARR.filter(e => e.isNew)
            filterItems(state)
            updatePlants(state)

        },
        sale (state, action) {
            state.allPlants = state.MAIN_ARR.filter(e => e.sale !== 1)
            filterItems(state)
            updatePlants(state)
        },
        all (state, action) {
            state.allPlants = state.MAIN_ARR
            filterItems(state)
            updatePlants(state)
        },
        sort (state, action) {
            if (action.payload === 'price') {
                state.allPlants.sort(function(a, b) {
                    return a.price * a.sale - b.price * b.sale
                });
                updatePlants(state)
            } else {
                state.allPlants.sort(function(a, b) {
                    return a.id - b.id
                });
                updatePlants(state)
            }
        },
        category(state, action) {
            if (state.selectedCategory !== action.payload) {
                state.selectedCategory = action.payload
                state.allPlants = state.MAIN_ARR.filter(el => el.category === action.payload)
            } else {
                state.selectedCategory = ''
                return
            }

            filterItems(state)
            updatePlants(state)
        },
        sizeFilter(state, action) {
            let size = ''

            switch (action.payload) {
                case 'Large': size = 'lr'
                    break
                case 'Medium': size = 'md'
                    break
                case 'Small': size = 'sm'
                    break
            }


            if (state.selectedSize !== size) {
                state.selectedSize = size
            } else state.selectedSize = ''

            state.allPlants = state.MAIN_ARR.filter(el => el.size === size)
            filterItems(state)
            updatePlants(state)
        },
        priceFilter(state, action) {
            state.selectedPrice = action.payload
            state.allPlants = state.MAIN_ARR.filter(el => el.price * el.sale <= action.payload && el.price * el.sale >= 39)
            filterItems(state)
            updatePlants(state)
        },
        buy(state, action) {
            let flag = false

            if (!state.cartItems.length) {
                state.cartItems.push({
                    item: action.payload,
                    count: 1,
                })
                return
            }

            state.cartItems.map(el => {
                if (el.item.id === action.payload.id) {
                    el.count++
                    flag = true
                    return
                }
            })

            if (!flag) {
                state.cartItems.push({
                    item: action.payload,
                    count: 1,
                })
            }
        },
        minusItem (state, action) {
            state.cartItems.map(el => {
                if (el.item.id === action.payload && el.count !== 0) {
                  el.count--
                }
            })
            filterCartItems(state)
        },
        plusItem (state, action) {
            console.log(action.payload)
            state.cartItems.map(el => {
                if (el.item.id === action.payload) {
                    el.count++
                    console.log(el.count)
                }
            })
            filterCartItems(state)
        },
    }
})


export default postsSlice.reducer
export const { pagination, newPlants, all, sale, sort, category, sizeFilter, priceFilter, buy, minusItem, plusItem } = postsSlice.actions
