import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { BsTrash3 } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"

import CartItem from "../components/CartItem"
import { clearItems } from "../redux/slices/cartSlice"
import CartEmpty from "../components/CartEmpty"

const Cart = () => {
  const { totalPrice, items } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const onClickClear = () => {
    if (window.confirm("Empty trash?")) {
      dispatch(clearItems())
    }
  }

  if (!totalPrice) {
    return <CartEmpty />
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <AiOutlineShoppingCart />
            Cart
          </h2>
          <div onClick={onClickClear} className="cart__clear">
            <BsTrash3 style={{ opacity: 0.5 }} />
            <span>Empty Cart</span>
          </div>
        </div>
        <div className="content__items">
          {items.map(item => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Total pizzas: <b>{totalCount}</b>{" "}
            </span>
            <span>
              {" "}
              Summary: <b>{totalPrice} €</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <Link
              to="/"
              className="button button--outline button--add go-back-btn"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>

              <span>Go back</span>
            </Link>
            <div className="button pay-btn">
              <span>Pay now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
