import { useEffect, useState } from "react"

import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Sort from "../components/Sort"

const Home = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("https://64037b3d302b5d671c50a3e4.mockapi.io/items")
      .then(res => res.json())
      .then(data => {
        setData(data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : data.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  )
}

export default Home
