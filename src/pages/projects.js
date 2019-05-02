import React from "react"
import Layout from "../components/layout"

export default () => (
    
    <Layout>
        <h1>My Projects</h1>
        <h3>Right now I have to projects on the go, bellow is a breif description of both</h3>
        <h4>Youddit</h4>
        <p>
            Youddit is made up of costimazable python scripts. These scripts include a reddit web scraper that looks for urls of a selected subreddit. 
            A downloading script is then called that will search each url to look and see if a video is attached to the url, if so the video will be downloaded. 
            Once a whole grouping of videos are downloaded they are randomly compiled into 5 minute compolatins. 
            Once the video is created it is uploaded to youtube.
        </p>
        <a href="https://www.youtube.com/channel/UCTGH8r_5szNZ6riHOWlU0wg">Click Here to see the youtube channel</a>
        <h4>AutoPlex</h4>
        <p>
            AutoPlex is made up of many different tools such as Filebot, Radarr, Sonarr, PlexDrive, Rclone.
            These tools are great tools on their own but have trouble working as one.
            The goal for this project was to be able to have a fully automated home entertamint setup.
            The problem was that alot of storage for automated home entertamint systems is required.
            So with AutoPlex I was able to solve this issue by using Radarr/Sonarr to fetch the latest media.
            I then upload all of new legally obtained media in an encrypted format to the cloud using a cron job or Rclone.
            Once in the cloud the files are renamed and sorted using Filebot.
            To stream the media I have configured PlexDrive to cache enough of the media on the local machine to view from Plex.
            All of this is configured on a headless server that has 1tb of local storage.
            With this solution I now have close to 30tb of encrypted media that can be reached using any plex client.
        </p>
        <p>Full write up of how to do this will be posted on my Github soon!</p>
    </Layout>
    
)