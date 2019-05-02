import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <div>
    <Link to={props.to}>
      <button className={props.styleName}>{props.children}</button>
    </Link>
  </div>
)

export default props => (
    <div>
        <ListLink to={props.toLocal} styleName={props.styleName}>{props.text}</ListLink>     
    </div> 
)
