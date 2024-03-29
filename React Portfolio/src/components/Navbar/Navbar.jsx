import React, {useState} from 'react';

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
       <a className= {styles.title} href="/">Ifeoma's Portfolio</a> 
       <div className= {styles.menu}>
        <ul className={styles.menuItems}>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#projects">Projects</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
       </div>
    </nav>
  )
}
