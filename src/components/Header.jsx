import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"

import logo from "../assets/img/pizza-logo.svg"
import Search from "./Search"
import { SearchContext } from "../App"

const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
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
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>8 €</span>
            <div className="button__delimiter"></div>
            <AiOutlineShoppingCart style={{ width: "20px", height: "20px" }} />
            <span>1</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
