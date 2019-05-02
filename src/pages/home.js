import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
    
    <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Calvin Smith</title>
          <link rel="canonical" href="https://www.calvinsmith.xyz/" />
        </Helmet>
        <h1>Hello</h1>
        <p> 
			Thanks for checking out my website, if you have any feedback that would be greatly appreciated
		</p>
		<a href="https://www.linkedin.com/in/calvinrosssmith/">To contact me click here</a>
    </Layout>
    
)
