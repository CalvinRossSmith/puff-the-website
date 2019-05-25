import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
    
    <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Calvin Smith Projects</title>
          <link rel="canonical" href="https://www.calvinsmith.xyz/projects/" />
        </Helmet>
        <h1>My Projects</h1>
        <h3>Currently I have two projects on the go, below is a brief description of both:</h3>
        <h4>Youddit</h4>
        <p>
            Youddit is made up of customizable python scripts. 
            These scripts include a reddit web scraper that looks for urls of a selected subreddit. 
            A downloading script is then called that will search each url to look and see if a video is attached to the url, if so the video will be downloaded. 
            Once a whole grouping of videos are downloaded they are randomly compiled into 5 minute compilations. 
            Once the video is created it is uploaded to YouTube.
        </p>
        <a href="https://github.com/CalvinRossSmith/Youddit-Public">Click Here to see the Github repository</a>
        <h4>AutoPlex</h4>
        <p>
            AutoPlex uses many different tools such as Filebot, Radarr, Sonarr, PlexDrive, Rclone. 
            These tools are great tools on their own, however have trouble working as one. 
            My goal for this project was to be able to have a fully automated home entertainment setup. 
            The problem was that a lot of storage for automated home entertainment systems is required. 
            With AutoPlex I was able to solve this issue by using Radarr/Sonarr to fetch the latest media. 
            I then was able to upload new legally obtained media in an encrypted format to the cloud using a cron job running Rclone. 
            Once in the cloud the files are renamed and sorted using Filebot. 
            To stream the media I have configured PlexDrive to cache enough of the media on the local machine to view from Plex. 
            All of this is configured on a headless server that has 1tb of local storage. 
            With this solution I now have close to 30tb of encrypted media that can be reached using any plex client.
        </p>
        <p>Full write up of how to do this will be posted on my Github soon!</p>
    </Layout>
    
)