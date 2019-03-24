import React from "react"
import Header from "./headerBar"
import "../styles/global.css"

export default ({ children }) => (
  <div className="MainLayout">
    <Header/>
    {children}
  </div>
)
