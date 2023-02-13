import React from 'react'
import styles from './styles.css'

export const Button = ({type, onClick}) => {
    const upLetter = (str)=>{
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  return (  
    <div className={styles.test}>
    <button onClick={onClick} className={`${styles[type]} ${styles.btn}`}>
      {upLetter(type)} Button
    </button>
    </div>
  )
}