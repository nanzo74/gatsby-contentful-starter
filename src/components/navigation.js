import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
   <li className={styles.navigationItem}>
        <Link>About</Link>
      </li>
   <li className={styles.navigationItem}>
        <Link>Who We Work With</Link>
      </li>
  <li className={styles.navigationItem}>
        <Link>Contact</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </nav>
)
