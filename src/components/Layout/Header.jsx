import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
    </header>
    <div className={classes['main-image']}>
        <img src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' alt='header-pict' / >
    </div>
    </>
  )
}

export default Header
