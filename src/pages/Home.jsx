import React from 'react'
import Categories from '../components/Categories'
import Pizzablock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup'
import {useSelector} from 'react-redux'

function Home(){

  const {items} = useSelector(({pizzas}) => {
    return {
    items: pizzas.items,
   
    }
  })

 
    return (
        
        <div className="container">
          <div className="content__top">
          <Categories onClickItem={(name) => console.log(name)} items={['Мясные', 'Вегетарианские', 'С сыром']}/>
           <SortPopup items={[{name: 'популярности', type: 'popular'}, 
                            {name: 'цене', type: 'price'}, 
                            {name: 'алфавиту', type: 'alphabet'}]}/>
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