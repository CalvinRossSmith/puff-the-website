import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
    
    <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Calvin Smith About</title>
          <link rel="canonical" href="https://www.calvinsmith.xyz/about/" />
        </Helmet>
        <h1>About Me</h1>
        <p> 
            My name is Calvin Smith. I am a second year Software Engineering student at the University of Ottawa.
            I have a drive for gaining a deeper understanding of how technology works. 
            It is my passion to apply this knowledge that I have gained, to solve interesting real world problems.
            I have had experience with a few amazing companies, like Espial Group and Ribbon Communications as well as a variety of self-taught experiences. 
        </p>
        <p>    
            If you would like to discuss the possibility of hiring me as a co-op/intern or part time software engineer
        </p>
    </Layout>
    
)