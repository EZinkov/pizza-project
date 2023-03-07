import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"

import logo from "../assets/img/pizza-logo.svg"
import Search from "./Search"

const Header = () => {
  const { items, totalPrice } = useSelector(state => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>EZ Pizza</h1>
              <p>The most delicious pizza in the universe</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} €</span>
            <div className="button__delimiter"></div>
            <AiOutlineShoppingCart style={{ width: "20px", height: "20px" }} />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
