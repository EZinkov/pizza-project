import React from "react"

const Categories = ({ value, handleCategory }) => {
  const categories = ["All", "Meat", "Vegan", "Grill", "Spicy"]

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategory(index)}
            className={value === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
