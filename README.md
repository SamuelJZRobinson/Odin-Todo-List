# Webpack Boilerplate
# Installation
- Install Node.js
- npm install --save-dev webpack-cli (install Webpack locally with a command line interface)
- Create src\index.js
- Create webpack.config.js with whatever is needed like mode, entry, output (filename, path, clean), devtool, devServer, plugins (templates), and modules (rules)
- npx webpack (run Webpack to compile code)
- npm install --save-dev html-webpack-plugin (simplifies creation of HTML files to serve your webpack bundles)
- npm install --save-dev style-loader css-loader (injects CSS into the DOM and resolves @import and url() statements)
- npm install --save-dev html-loader (allows processing HTML and bundling other assets (images or styles))
- Create asset/resource
- npm install --save-dev webpack-dev-server (local development server that provides live reloading)
- npx webpack serve (run local development server)
- npm install material-icons@latest

# Components
Command-line Tools:
- npx: package executor that doesn't install packages.
- npm: package manager that installs packages.

Directories:
- node_modules: directory containing Webpack's code and dependencies.
- src: directory for source code and development work.
- dist: directory for bundled files ready for deployment.

Files:
- package-lock.json: file for tracking specific package versions and dependencies.
- webpack.config.js: configures webpack.

Configurations:
- mode: Set to development for easier debugging.
- entry: file path to the entry point.
- output: output bundle settings.

# Tips
- Modular files are imported as needed to avoid global dependencies.
- Image file names are hashed by default during bundling.
- By default the site is accessed at http://localhost:8080/.
- The webpack-dev-server only reads the configuration at startup.

# Reference
- https://webpack.js.org/guides/installation/
- https://www.theodinproject.com/lessons/javascript-webpack