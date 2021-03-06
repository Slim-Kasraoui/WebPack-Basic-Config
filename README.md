# WebPack-Basic-Config
WebPack basic config explanation


When installing a dependency like Lodash and then use it in your code, the browser doesn't know where to find it.

The webPack when running the build command will analyse the code in the index.js and compile it to a dist/main.js file which is the production code shipped to the end user in the browse by changing the src script to the main.js path

==> That's how the modules are bundled!

The default config of Webpack looks for the src/index.js if you named it something else, webpack won't work!

# Customizing the behavior of webpack 
For that you need a webpack.config.js ==> JS module that exports an object that customizes the behavior of webpack.

You will need the entry point, the mode (prod, dev or none), the loaders (process non js files)
in modules attribute

==> you can use the bundle analyzer to have an objective visual view of the bundle size
for that you need to install : 
npm install --save-dev webpack-bundle-analyzer

Watch and serve my files :
 npm install --save-dev webpack-dev-server