import React from 'react'
import Categories from '../components/Categories'
import Pizzablock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup'

function Home({items}){

 
    return (
        
        <div className="container">
          <div className="content__top">
          <Categories onClickItem={(name) => console.log(name)} items={['Мясные', 'Вегетарианские', 'С сыром']}/>
           <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
           </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items.map(obj => (<Pizzablock key= {obj.id} {...obj}/>))
            }
            
          </div>
        </div>
   

    )
}

export default Home;