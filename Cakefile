requirejs = require 'requirejs'

task 'build', 'Minifies JavaScript files for production use', ->
  console.log "building javascript sources"

  config =
    baseUrl: './public/js'
    dir: "./build"
    optimize: "uglify"
    paths:
      "jquery": "jquery-1.7.1.min",
      "gremlinjs": "gremlin.min"
    modules: [{
      name: "main"
    }]

  requirejs.optimize config, (buildResponse) ->
    console.log(buildResponse)