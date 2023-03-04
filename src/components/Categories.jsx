import React, { useState } from "react"

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = ["All", "Meat", "Vegan", "Grill", "Spicy"]

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
