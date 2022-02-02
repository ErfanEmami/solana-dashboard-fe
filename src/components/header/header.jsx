import React from "react"

import styles from "./header.module.css"
import favIcon from "../../images/logo.png"
import Flex from "../flex/flex"

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <img src={favIcon}/>
        <Flex gap="20px">
          <div>Home</div>
          <div>Dashboard</div>
          <div>About Us</div>
        </Flex>
      </div>
    )
  }
}
