import React from "react"
import AIOHeader from "./header/headerBar"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <AIOHeader/>
    {children}
  </div>
)
