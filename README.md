# Routing

## What is Routing

Many modern websites are actually made up of a single page, they just look like multiple pages because they contain components which render like separate pages. These are usually referred to as SPAs - single-page applications. At its core, what React Router does is conditionally render certain components to display depending on the route being used in the URL (/ for the home page, /about for the about page, etc.).

## How to implement routing in react

1. Crude way of implementing routing in react js is with the help of conditional rendering. But code will get messy preety soon.

2. React Router is the standard routing library for React.
   We'll be working with react-router v5 as React Router v6 is in alpha version currently. Once it is released its going to add some a lot of powerful new features in the library.

## React Router

### Installation

```bash
yarn add react-router-dom

yarn add @types/react-router-dom
```

Below are some of the main utilities present in the react-router library.

`BrowserRouter` : React Router keeps the URL up to date as you navigate through the site. This preserves the browser history, making sure things like the back button and bookmarks work properly.
`BrowserRouter` is the router implementation for HTML5 browsers (vs Native).

`Route` : It renders some UI if the current location matches the route’s path. Ideally, a `<Route>` component should have a prop named path, and if the pathname is matched with the current location, it gets rendered.
`Route` is the conditionally shown component based on matching a path to a URL.

`Link` : The `<Link>` component, on the other hand, is used to navigate between pages. It’s comparable to the HTML anchor element. However, using anchor links would result in a browser refresh, which we don’t want. So instead, we can use `<Link>` to navigate to a particular URL and have the view re-rendered without a browser refresh.
`Link` is the replacement for anchor tags.

`Switch` : A `<Switch>` looks through all its children `<Route>` elements and renders the first one whose path matches the current URL. Use a `<Switch>` any time you have multiple routes, but you want only one of them to render at a time.
Switch returns only the first matching route rather than all matching routes.

`Redirect` : A `<Redirect>` will replace the current location in the history stack with a new location. The new location is specified by the to prop.

## Flow

- `Link` has the url path in its 'to' attribute.
- `Route` is defined with the 'path' and 'component' attributes
- When multiple `Route`s are placed under a `Switch`; only one `Route` is loaded, which matches the path.
- `BrowserRouter` holds all the routes to be managed by react router (for DOM).

### When a `Link` is clicked, the `Switch` identifies the `Route` to be loaded for rendering by the `BrowserRouter`

### The `component` which matches the `path` in the `Route` is then loaded by the `BrowserRouter`

---

# Axios

## Using yarn

```bash
yarn add axios

yarn add @types/axios
```

## What is Axios

Axios is a promise-based HTTP client that works both in the browser and in a node.js environment.  
It basically provides a single API for dealing with XMLHttpRequests and node’s http interface.  
Besides that, it wraps the requests using a polyfill for ES6 new’s promise syntax.

Two major advantages of using axios when compared to fetch are

1. Automatic transforms of JSON data.

2. Better error handling

### Examples

#### get

```javascript
// Performing a GET request
axios.get("https://api.github.com/users/" + username).then(function (response) {
  console.log(response.data); // ex.: { user: 'Your User'}
  console.log(response.status); // ex.: 200
});
```

#### post

```javascript
// Performing a POST request
axios
  .post("/save", { firstName: "Marlon", lastName: "Bernardes" })
  .then(function (response) {
    console.log("saved successfully");
  });
```

---

# useReducer Hook

## What is reducer

A `reducer` is a simple function that takes two values and reduces them down to one value.  
Reducers are used in reactjs application to determine changes to the application state.

Let's dive into the implementation details: In essence, a `reducer` is a function which takes <u>two arguments</u> -- the `current state` and an `action` -- and returns based on both arguments a `new state`. In a pseudo function it could be expressed as:

```javascript
(state, action) => newState;
```

### Example

```javascript
const counterReducer = (count, action) => {
  if (action.type === "INCREASE") {
    return count + 1;
  }

  if (action.type === "DECREASE") {
    return count - 1;
  }

  return count;
};
```

## What is useReducer

`useReducer` is a react hook, which accepts a `reducer function` with the application `initial state`, returns the `current application state`, then `dispatches` a function.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

## When to prefer useReducer over useState

Use useState if you have:

- JavaScript primitives as state
- simple state transitions
- business logic within your component
- different properties that don't change in any correlated way and can be managed by multiple useState hooks
- state co-located to your component
- a small application (but the lines are blurry here)

One usecase is `controlled components`

Use useReducer if you have:

- JavaScript objects or arrays as state
- complex state transitions
- complicated business logic more suitable for a reducer function
- different properties tied together that should be managed in one state object
- the need to update state deep down in your component tree
- a medium-sized application (NB: the lines are blurry here)
- need for an easier time testing it
- need for a more predictable and maintainable state architecture

One usecase could be, fetching data from rest endpoint, based on several actions to maintain the state.

---

## References

- https://reacttraining.com/react-router/web/guides/quick-start
- https://www.sitepoint.com/react-router-complete-guide/
- https://www.freecodecamp.org/news/react-router-in-5-minutes/
- https://github.com/public-apis/public-apis
- [Naming Conventions](https://github.com/unional/typescript-guidebook/blob/master/pages/default/draft/naming-conventions.md#file-naming)
- https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5
- [Axios](http://codeheaven.io/ow-to-use-axios-as-your-http-client/)
