import axios from 'axios'


export const setLoaded = (payload) =>({
    type: 'SET_LOADED',
    payload
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3000/db.json?category=${category}`).then(({data}) => 
    dispatch(setPizzas(data.pizzas)))
}


export const setPizzas = (items) => ( {
    type: 'SET_PIZZAS',
    payload: items,
})