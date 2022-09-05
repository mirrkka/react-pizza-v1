import React from 'react'
import Categories from '../components/Categories'
import Pizzablock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup'
import {useSelector, useDispatch} from 'react-redux'
import { setCategory } from '../redux/actions/filters';
import {useCallback, useEffect} from 'react'
import { fetchPizzas } from '../redux/actions/pizzas'

const categoryNames = ['Мясные', 'Вегетарианские', 'С сыром', 'Острые', 'Гриль']
const sortItems = [{name: 'популярности', type: 'popular'}, 
{name: 'цене', type: 'price'}, 
{name: 'алфавиту', type: 'alphabet'}]


function Home(){

  const dispatch = useDispatch()

  const items = useSelector(({pizzas}) => pizzas.items)
  
  useEffect(() => {
    
    dispatch(fetchPizzas())

  }, [])

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

 
    return (
        
        <div className="container">
          <div className="content__top">
          <Categories onClickItem={onSelectCategory} items={categoryNames}/>
           <SortPopup items={sortItems}/>
           </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items && 
              items.map(obj => (<Pizzablock key= {obj.id} {...obj}/>))
            }
            
          </div>
        </div>
   

    )
}

export default Home;