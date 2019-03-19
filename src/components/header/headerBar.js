import React from "react"
import HeaderButtons from "./headerButtons"

export default props => (
    <div>
        <HeaderButtons toLocal="/" headerButton="Home"/>
        <HeaderButtons toLocal="/about" headerButton="About"/>
        <HeaderButtons toLocal="/resume" headerButton="Resume"/>
        <HeaderButtons toLocal="/projects" headerButton="Projects"/>
        <HeaderButtons toLocal="/contact" headerButton="Contact Me!"/>
    </div> 
)