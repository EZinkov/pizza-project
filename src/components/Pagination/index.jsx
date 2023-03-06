import React from "react"
import ReactPaginate from "react-paginate"

import styles from "./Pagination.module.scss"

const Pagination = () => {
  return (
    <>
      <ReactPaginate
        className={styles.root}
        nextLabel=">"
        previousLabel="<"
        onPageChange={() => console.log()}
        pageRangeDisplayed={3}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Pagination
