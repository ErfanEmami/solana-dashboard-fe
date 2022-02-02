import React from "react"

import Flex from "../flex/flex"
import Header from "../header/header"

import "./page.css"

const Page = ({ children }) => (
  <Flex center>
    <div className="content">
      <Header/>
      {children}
    </div>
  </Flex>
)

export default Page