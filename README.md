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

## Implementation

- Create `Routes.tsx` file and add routes in the file.

## References

- https://reacttraining.com/react-router/web/guides/quick-start
- https://www.sitepoint.com/react-router-complete-guide/
- https://www.freecodecamp.org/news/react-router-in-5-minutes/
- https://github.com/public-apis/public-apis
- [Naming Conventions](https://github.com/unional/typescript-guidebook/blob/master/pages/default/draft/naming-conventions.md#file-naming)
- https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5
