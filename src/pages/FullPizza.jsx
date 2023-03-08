import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

const FullPizza = () => {
  const { id } = useParams()
  const [pizza, setPizza] = useState()

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://64037b3d302b5d671c50a3e4.mockapi.io/items/" + id
        )
        setPizza(data)
      } catch (error) {
        alert("Something gone wrong")
      }
    }
    fetchPizza()
  }, [id])

  if (!pizza) {
    return "Loading"
  }
  return (
    <div className="container flex">
      <img src={pizza.imageUrl} alt="Pizza" />
      <div className="">
        <h2>{pizza.title}</h2>
        <p>{pizza.description}</p>
        <Link to="/" className="button button--outline go-back-btn">
          <span>Go back</span>
        </Link>
      </div>
    </div>
  )
}

export default FullPizza
