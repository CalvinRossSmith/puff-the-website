// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/home/calvinsmith/projects/puff-the-website/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("/home/calvinsmith/projects/puff-the-website/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-home-js": () => import("/home/calvinsmith/projects/puff-the-website/src/pages/home.js" /* webpackChunkName: "component---src-pages-home-js" */),
  "component---src-pages-index-js": () => import("/home/calvinsmith/projects/puff-the-website/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("/home/calvinsmith/projects/puff-the-website/src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-resume-js": () => import("/home/calvinsmith/projects/puff-the-website/src/pages/resume.js" /* webpackChunkName: "component---src-pages-resume-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/calvinsmith/projects/puff-the-website/.cache/data.json")

