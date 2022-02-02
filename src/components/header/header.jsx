import React from "react"
import { Link, useLocation } from "react-router-dom"
import classNames from "classnames/bind"

import favIcon from "../../images/logo.png"
import Flex from "../flex/flex"

import styles from "./header.module.css"
const cx = classNames.bind(styles);

const Header = () => {
  const { pathname } = useLocation()
      
  return (
    <div className={styles.header}>
      <img src={favIcon}/>
      <Flex gap="20px">
        <Link to="/" className={cx({ current: pathname === "/" })}>Home</Link>
        <Link to="/dashboard" className={cx({ current: pathname === "/dashboard" })}>Dashboard</Link>
        <Link to="/about" className={cx({ current: pathname === "/about" })}>About Us</Link>
      </Flex>
    </div>
  )
}

export default Header
