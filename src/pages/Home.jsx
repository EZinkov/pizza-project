import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"

import { setCategoryId } from "../redux/slices/filterSlice"
import Categories from "../components/Categories"
import PizzaBlock from "../components/PizzaBlock"
import Skeleton from "../components/PizzaBlock/Skeleton"
import Sort from "../components/Sort"
import { SearchContext } from "../App"

const Home = () => {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector(state => state.filter)

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { searchValue } = useContext(SearchContext)

  const handleCategory = id => {
    dispatch(setCategoryId(id))
  }

  const pizzas = data.map(pizza => <PizzaBlock key={pizza.id} {...pizza} />)
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ))

  useEffect(() => {
    setIsLoading(true)

    const search = searchValue ? `&search=${searchValue}` : ""
    const category = categoryId > 0 ? `category=${categoryId}` : ""

    axios
      .get(
        `https://64037b3d302b5d671c50a3e4.mockapi.io/items?page=1&${category}&sortBy=${sort.sortProperty}&order=desc${search}`
      )
      .then(res => {
        setData(res.data)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [categoryId, sort.sortProperty, searchValue])

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} handleCategory={handleCategory} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  )
}

export default Home
