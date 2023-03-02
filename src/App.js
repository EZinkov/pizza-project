import Categories from "./components/Categories"
import Header from "./components/Header"
import Sort from "./components/Sort"
import "./scss/app.scss"
function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
        </div>
      </div>
    </div>
  )
}

export default App
