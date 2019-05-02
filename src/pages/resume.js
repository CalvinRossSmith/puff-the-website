import React from "react"
import Layout from "../components/layout"
import Resume from "../../static/Calvin Smith s Resume.jpg"
import { Helmet } from "react-helmet"

export default () => (
    
    <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Calvin Smith Resume</title>
          <link rel="canonical" href="https://www.calvinsmith.xyz/resume/" />
        </Helmet>
        <h1>Resume</h1>
        <p>Click to download</p>
        <a href="https://drive.google.com/uc?export=download&id=1RmAXU2ydE9XZshF9GqfdfCRA-yQEnQQa">
            <img src={Resume} alt="Resume" className="resume"/>
        </a>
    </Layout>
    
)