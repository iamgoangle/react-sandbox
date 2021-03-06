# Yellow Duck dot I/O
I am thrilled to listen developer, blogger and open source community that talking about new library for view. ReactJS claim itself it is component based development. It is just about library, not a framework so the developer probably need to learn with higher learning curve at once to understand fundamental of javascript, design pattern and plug a module by your own.

This repository was created for learning all about ReactJS and plug the related modules that fulfill web layer ui-controller-model.

![Golf company logo](https://raw.githubusercontent.com/iamgoangle/react-sandbox/master/iamgoangle-logo.png)

# Author
Mr. Teerapong Singthong (GOLF)

# Installation
1. Fork
2. open cmd.exe
3. run this command `npm install`

# Running the project
1. Open shell or command line program
2. `npm run start:dev`, waiting 3-5 second, the browser will automatically launch
3. `npm run start:db`
4. `npm run start:server`

# Stack Lists
1. ReactJS
2. [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html)
3. React-DOM / React-Router
3. Middleware / Redux / Redux-Thunk
4. Axios / isomorphic-fetch
5. Bootstrap 3 / Font-Awesome / Material-UI
6. Node.JS
7. MongoDB / Mongoose
8. Webpack / Sass loader / babel-loader ...
9. Babel
10. ES5 / ES6
11. Gulp
12. Express
13. Sass (.scss)

# Webpack plugins
1. html-webpack-plugin [Example 1](http://javascriptplayground.com/blog/2016/07/webpack-html-plugin/)
[Example 2](https://github.com/ampedandwired/html-webpack-plugin) [Example 3 ](https://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html)

# Resolving solution
1. [Resolve root directory by using resolve.root in webpack](https://medium.com/@goangle/webpack-resolve-import-require-path-that-refers-to-root-directory-by-resolve-root-1775fdc5723b#.pzvy0cq0e)
2. Using static keyword with babel [http://stackoverflow.com/questions/38363156/static-proptypes-not-working-under-es6](http://stackoverflow.com/questions/38363156/static-proptypes-not-working-under-es6)

# New learning
1. [Why use “this.props.dispatch” rather than “store.dispatch” directly in Redux?](http://stackoverflow.com/questions/33221634/why-use-this-props-dispatch-rather-than-store-dispatch-directly-in-redux)
2. [Singleton Pattern](https://en.wikipedia.org/wiki/Singleton_pattern) [Singletom Design pattern](https://sourcemaking.com/design_patterns/singleton)
3. [Redux - connect()] (https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
4. Passing parameter when onClick [link](http://stackoverflow.com/questions/34350988/react-passing-parameter-via-onclick-event-using-es6-syntax) `Remember that in onClick={ ... }, the ... is a JavaScript expression In other words, you call this.handleRemove(id) immediately, and pass that value to onClick, which isn't what you want.`
5. JS Spread syntax [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator) myFunc(...[10, 11, 12)
6. React Style Guide [https://github.com/airbnb/javascript/tree/master/react](https://github.com/airbnb/javascript/tree/master/react)
7. React Ajax Best Practice [http://andrewhfarmer.com/react-ajax-best-practices/](http://andrewhfarmer.com/react-ajax-best-practices/)
8. React XHR Library [http://andrewhfarmer.com/ajax-libraries/](http://andrewhfarmer.com/ajax-libraries/)
9. Middleware and Redux React life cycle [https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.54m7xiu45](https://medium.com/@rajaraodv/using-middlewares-in-react-redux-apps-f7c9652610c6#.54m7xiu45)
10. [http://stackoverflow.com/questions/35439019/redux-promise-with-axios-and-how-do-deal-with-errors](http://stackoverflow.com/questions/35439019/redux-promise-with-axios-and-how-do-deal-with-errors)
11. Thunk [http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/](http://danmaz74.me/2015/08/19/from-flux-to-redux-async-actions-the-easy-way/)
12. Redux Thunk [https://github.com/gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)
13. Remove state array [http://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux](http://stackoverflow.com/questions/34582678/is-this-the-correct-way-to-delete-an-item-using-redux) [https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread](https://egghead.io/lessons/javascript-redux-avoiding-array-mutations-with-concat-slice-and-spread) [http://stackoverflow.com/questions/34003553/redux-what-is-the-correct-way-to-filter-a-data-array-in-reducer](http://stackoverflow.com/questions/34003553/redux-what-is-the-correct-way-to-filter-a-data-array-in-reducer)
14. Understand middleware [https://medium.com/@meagle/understanding-87566abcfb7a#.8sqirw5rg](https://medium.com/@meagle/understanding-87566abcfb7a#.8sqirw5rg)
15. Good content to manage state connect to api redux axios [http://www.davidmeents.com/manage-state-connect-to-api-redux-axios/](http://www.davidmeents.com/manage-state-connect-to-api-redux-axios/)
16. Functional Programming [https://medium.com/funk-tional/hello-functional-programming-eacb0091a53c#.4zhercqrm](https://medium.com/funk-tional/hello-functional-programming-eacb0091a53c#.4zhercqrm)

# To remind myself
1. ((Reducer)) We don't mutate the state / The reducer is a pure function that takes the previous state and an action, and returns the next state.
