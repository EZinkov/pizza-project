import React from "react"
import { Link } from "react-router-dom"
import emptyCartImg from "../assets/img/empty-cart.png"

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Empty cart <icon>😕</icon>
        </h2>
        <p>
          You probably haven't ordered pizza yet. <br />
          To order pizza, go to the main page.{" "}
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link to="/" className="button button--black">
          <span>Go back</span>
        </Link>
      </div>
    </>
  )
}

export default CartEmpty
