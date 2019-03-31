import React from "react"
import LinkingButtons from "./linkingButtons"

export default props => (
    <div className="Header">
        <LinkingButtons toLocal="/" text="Home" styleName="HeaderButtons"/>
        <LinkingButtons toLocal="/about" text="About" styleName="HeaderButtons"/>
        <LinkingButtons toLocal="/resume" text="Resume" styleName="HeaderButtons"/>
        <LinkingButtons toLocal="/projects" text="Projects" styleName="HeaderButtons"/>
        <LinkingButtons toLocal="/contact" text="Contact Me" styleName="HeaderButtons"/>
    </div> 
)