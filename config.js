System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.6.17",
    "babel-runtime": "npm:babel-runtime@5.6.17",
    "bio-element": "github:herkulano/bio-element@0.0.5",
    "core-js": "npm:core-js@0.9.18",
    "html": "github:Hypercubed/systemjs-plugin-html@master",
    "polymer": "github:greenify/polymer-js@1.0.5",
    "webcomponentsjs-lite": "github:webcomponents/webcomponentsjs@0.7.2",
    "github:herkulano/bio-element@0.0.4": {
      "html": "github:Hypercubed/systemjs-plugin-html@master",
      "polymer": "github:greenify/polymer-js@1.0.5",
      "webcomponentsjs-lite": "github:webcomponents/webcomponentsjs@0.7.2"
    },
    "github:herkulano/bio-element@0.0.5": {
      "html": "github:Hypercubed/systemjs-plugin-html@master",
      "polymer": "github:greenify/polymer-js@1.0.5",
      "webcomponentsjs-lite": "github:webcomponents/webcomponentsjs@0.7.2"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.6.17": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

