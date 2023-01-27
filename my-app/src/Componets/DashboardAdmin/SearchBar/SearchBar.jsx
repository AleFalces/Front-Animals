import React from 'react'
import styles from './SearchBar.module.css'

const SearchBar = ()=>   {
    return (
      <div>
        <input placeholder="Buscar" className={styles.search} type="search" />   
      </div>
    )
  }

export default SearchBar
