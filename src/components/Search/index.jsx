import React, { useContext } from "react"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { SearchContext } from "../../App"

import styles from "./Search.module.scss"

const Search = () => {
  const { searchValue, setSearchValue } = useContext(SearchContext)
  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.icon} />
      <input
        className={styles.input}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder="Search"
      />
      {searchValue && (
        <AiOutlineClose
          className={styles.closeIcon}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  )
}

export default Search
