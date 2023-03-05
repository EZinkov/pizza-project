import React from "react"
import styles from "./NotFound.module.scss"
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Nothing found :(</h1>
      <p className={styles.description}>Unfortunately this page is missing</p>
    </div>
  )
}

export default NotFoundBlock
