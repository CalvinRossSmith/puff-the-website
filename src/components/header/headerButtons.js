import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default props => (
    <div>
        <ListLink to={props.toLocal}>{props.headerButton}</ListLink>     
    </div> 
)
