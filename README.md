# GremlinJS sample project

## Try it

To see the site in action, visit [the github page](http://grmlin.github.com/gremlinjs_sample/)

## Understand it

All the code you're looking for can be found inside the `public` directory.

To try it out for yourself, point the webservers root to the public folder and open the `index.html` with the browser of
your choice.

## Build it

There is a `Cakefile` included to build the project. You'll need nodejs, npm and coffeescript to use it.

- install necessary node modules: `npm install`
- build the procect: `cake build`

If the build succeeds, a new `build` directory appears with all the javascript sources minified.

**Note that `main.js` includes everything it needs to work properly, `jquery` and `gremlinjs`.**   
**The gremlins are missing, as they are required at runtime. They are minified nevertheless and can be found inside the
`gremlins` directory.**

If you plan to include all your stuff on page load, use the `out` and `include` options of requirejs.