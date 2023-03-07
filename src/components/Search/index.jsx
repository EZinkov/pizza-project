import React, { useContext, useRef, useCallback, useState } from "react"
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import debounce from "lodash.debounce"

import { SearchContext } from "../../App"
import styles from "./Search.module.scss"

const Search = () => {
  // setSearchValue for make a search
  const { setSearchValue } = useContext(SearchContext)
  // value state to quickly save date
  const [value, setValue] = useState("")
  const inputRef = useRef()

  const onClickClear = () => {
    setSearchValue("")
    setValue("")
    inputRef.current.focus()
  }

  const updateSearchValue = useCallback(
    debounce(str => {
      setSearchValue(str)
    }, 300),
    []
  )

  const handleChangeInput = e => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      <AiOutlineSearch className={styles.icon} />
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={handleChangeInput}
        placeholder="Search"
      />
      {value && (
        <AiOutlineClose className={styles.closeIcon} onClick={onClickClear} />
      )}
    </div>
  )
}

export default Search
