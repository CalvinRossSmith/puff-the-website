import React from "react"
import Home from "./home"
import { Helmet } from "react-helmet"

export default () => (
    
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Calvin Smith</title>
          <link rel="canonical" href="https://www.calvinsmith.xyz/" />
        </Helmet>
        <Home/>
    </div>
    
)
