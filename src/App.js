import { useEffect, useState } from "react"
import Categories from "./components/Categories"
import Header from "./components/Header"
import PizzaBlock from "./components/PizzaBlock"
import Sort from "./components/Sort"
import "./scss/app.scss"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://64037b3d302b5d671c50a3e4.mockapi.io/items")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">All pizzas</h2>

          <div className="content__items">
            {data.map(pizza => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
