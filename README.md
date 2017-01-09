# React/Webpack Single Page App
Inspired by, and partially derived from:
+ [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
+ [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)

## Features
+ Mostly [isomorphic](https://www.lullabot.com/articles/what-is-an-isomorphic-application) (more on that later)
+ Hot reloading React components
+ Hot reloading CSS
+ [Sass](http://sass-lang.com/)
+ Media queries powered by [sass-mq](https://github.com/sass-mq/sass-mq)
+ [Autoprefixer](https://github.com/postcss/autoprefixer)
+ [Critical](https://github.com/addyosmani/critical) CSS
+ Utility Sass mixins, including one for CSS animations
+ Supports ES6
+ Includes [Modernizr](https://modernizr.com/)
+ Includes utility JavaScript functions, including debounce
+ Font loading powered by [WebFontLoader](https://github.com/typekit/webfontloader)
+ Sprites powered by [PostCSS inline SVG](https://github.com/TrySound/postcss-inline-svg)

## Organization
In alphabetical order:

+ **browserslist**: Tells Autoprefixer what browsers to support
+ **build.js**: Extracts markup for server-side rendering
+ **/dist/**: All files needed on the production server will end up here
+ **/dist/img/**: Images go here
+ **/dist/libs**: Third-party libraries go here
+ **Gulpfile.js**: Handles Critical CSS and Modernizr
+ **server.js**: Powers the [Express.js](http://expressjs.com/) app that handles hot-reloading
+ **/src/**: The JavaScript, including React components, and SCSS powering the app
+ **/views/**: Pug templates, including index.pug, which will eventually render into /dist/index.html

## Commands
+ `npm run dev`: Fires up the development server at http://localhost:3000/. If you turn off JavaScript, the app should still do initial render.
+ `npm run build`: Build for production. First, the old production build is cleaned out. Next, Webpack builds the script and stylesheet. Next, Node.js renders the `<App />` React component into static markup and injects it into /dist/index.html. Finally, Gulp inlines critical CSS and builds a custom Modernizr script.

## What do you mean by mostly isomorphic?
The markup does render server side first, but that's only because `<App />`'s markup is injected into /dist/index.html by build.js. This has pros and cons. It means you don't need a Node.js server to run this in production, but it also means the server side markup isn't dynamic based on a URL hash or route.

## License
MIT
