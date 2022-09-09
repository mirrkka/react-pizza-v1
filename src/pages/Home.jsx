import React from 'react'
import Categories from '../components/Categories'
import Pizzablock from '../components/PizzaBlock/PizzaBlock';
import SortPopup from '../components/SortPopup'
import {useSelector, useDispatch} from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters';
import {useCallback, useEffect} from 'react'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzatoCart } from '../redux/actions/cart'
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock';

const categoryNames = ['Мясные', 'Вегетарианские', 'С сыром', 'Острые', 'Гриль']
const sortItems = [{name: 'популярности', type: 'popular'}, 
{name: 'цене', type: 'price'}, 
{name: 'алфавиту', type: 'alphabet'}]


function Home(){

  const dispatch = useDispatch()

  const items = useSelector(({pizzas}) => pizzas.items)

  const cartItems = useSelector(({cart}) => cart.items)

  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
  const { category, sortBy } = useSelector(({ filters }) => filters);

  console.log(items, 'items')


  
  useEffect(() => {
    
    dispatch(fetchPizzas())
    console.log(fetchPizzas(category, sortBy))

  }, [category, sortBy])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSort = useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  
  const handleAddPizzatoCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

 
    return (
        
        <div className="container">
          <div className="content__top">
          <Categories activeCategory={category}
                      onClickCategory={onSelectCategory} items={categoryNames}/>
           <SortPopup activeSortType={sortBy} items={sortItems} onClickSort={onSelectSort}/>
           </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded ?
              items.map(obj => (<Pizzablock onClickAddPizza = {handleAddPizzatoCart} 
                key= {obj.id} 
                isLoading={true} 
                addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                {...obj}/>))
            : Array(12).fill(0).map((_, index) => (<PizzaLoadingBlock key={index}/>))}
            
          </div>
        </div>
   

    )
}

export default Home;