const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/src/pages/about.js"))),
  "component---src-pages-home-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/src/pages/home.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/src/pages/projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("/home/calvinsmith/projects/puff-the-website/src/pages/resume.js")))
}

