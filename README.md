# 13-react-routing

Learning react routing continued.

Working with:

1. components
2. Importing image in a component.
3. useState()
4. Derived state from existing state variable.
5. Tailwind css - [Practice Project 2 - react-project-management]
6. useRef() helps in accessing the DOM of an element.
7. useRef() also helps in retaining the parts of the code like a reference to setTimeout(), setInterval(), array, object etc.
8. useRef() value doesn't change when component function renders again and again because of state function updates.
9. Using useRef() to manipulate the DOM is discouraged.
10. `<dialog></dialog>` is what we use very frequently with useRef() to open or close modals.
11. forwardRef()
12. useImperativeHandle()
13. createPortal()
14. createContext()
15. useContext()
16. `useContext()` should be used when a particular data is needed on multiple pages or UIs of the application.
17. [useContext() with useState()](https://github.com/ankurnecessary/8-react-food-ordering-app/blob/main/src/store/UserProgressContext.jsx)
18. [useContext() with useReducer()](https://github.com/ankurnecessary/8-react-food-ordering-app/blob/main/src/store/CartContext.jsx)
19. An alternative to `useState()`. `useReducer()` is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
20. <React.StrictMode>
21. Children prop
22. Using rest operator while using component tag.
23. useEffect() - with blank dependency array will fire only once at the end of first render of the component.
24. useEffect() - with dependency array will fire on first render of the component and every time value of the variables in dependency array changes.
25. useEffect() - with a return function inside useEffect() function. The function returned will fire when the related component dismounts. That is why it is also called clean up function. `The clean up function also get fired up whenever useEffect() function is fired i.e. whenever useEffect() function fires up due to change in the value of the variables in dependency array.`
26. We generally use useEffect() for the asynchronous code which will resolve in future and can change the state of the application.
27. useEffect()'s dependency array should include useState() variables, useContext() variables and props which are used inside the useEffect()'s first function argument.
28. We can have multiple useEffect() hooks in a component.
29. useCallback() - Whenever we wrap any function inside the useCallback() it stops getting recreated again and again when a component rerenders, if the dependency array is blank. If not then the function in useCallback() will be recreated when the value of any of the dependency change.
30. In the dependency array of useEffect() and useCallback() function we put props, state variables or other functions that are dependent on the state variables like context values and other functions. You will not add the state updating function of useState() directly.
31. useState()'s state updating function never gets recreated again in react. So, we need not pass it as a dependency in useCallback() or useEffect().
32. We have to add **variables related to derived state** as dependencies in useCallback() and useEffect().
33. **_We should avoid or at least minimize the usage of useEffect() in our application as a best practice._**
34. If we have multiple components having **key** attribute with them and all of them belong to same entity then we should consider making a separate component for that entity and use **key** attribute over it.
35. We as a developer cannot consume **key** prop. It is exclusively for the react.
36. Using **key** attribute and it's value as the array index in repeating element in the JSX is a bad idea. Instead we should use id in the array elements as the value of the **key** attribute. It increases performance and remove functionality issues.
37. Using **key** attribute in the component tag is another pattern that could help us in re-initializing the component. So, it is like reloading a component with new prop values instead of using useEffect() to do so. It is like using a component afresh.
38. [Key lecture](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/40270596#questions)
39. Why use PropTypes instead of TypeScript? Answer: type-checking props using TypeScript can only be effective when the prop's value is hardcoded. Even though you claim that the data from the API is a number, you won't get any errors when the data is a string. Since type-checking is done during runtime, PropTypes is a better tool for unknown data.
40. React query is a good plugin for HTTP calls via react application. AJAX
41. Whenever a component rerenders because of state function being called, it's child components are also rerendered.
42. [React.memo](https://docs.google.com/document/d/1IKjPhw6a3TPKvmeJ9743PljP6ci7UkbkgNa3sQwVRWs/edit#heading=h.raq8jq8e7749)
43. We can use React.memo() with useCallback() too.
44. [useMemo()](https://docs.google.com/document/d/1IKjPhw6a3TPKvmeJ9743PljP6ci7UkbkgNa3sQwVRWs/edit#heading=h.cf9uscl5y5c8)
45. If we have multiple state functions being fired at once, may be within a function, then that doesn't mean that our component will also get rerendered multiple times (once for each state function call). Instead it will render only once.
46. We can use [millionjs](https://million.dev/) to increase the speed and performance of our react project. It works on state changing and checking algorithm.
47. A library like gotbootstrap.com in react is [Material Tailwind](https://www.material-tailwind.com/docs/react/accordion).
48. Next.js or Remix
49. General rules of using hooks.
    1. Only call Hooks in Component or Other custom hook function.
    2. Only call hooks on top level i.e. directly inside a component function but not in any if block or function inside component function.
50. [Why custom hook?](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39837042#content). Suppose we have created a component and it is being used in multiple places later on. The component needs some data to be passed in through one of it's props. We are fetching this data from different HTTP endpoints at all the places where we have used this component. That means there is some code pattern that is common among all the places where the component is used and re-used. To decrease the code repetition related to the common code pattern we use **custom hooks**.
51. A custom hook's function name should start with the word 'use' like 'useFetch()' etc.
52. [Custom hook video](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8244694#questions)
53. [Custom hook example](https://github.com/ankurnecessary/8-react-food-ordering-app/blob/main/src/hooks/useHttp.js)
54. Using `useState()` to handle the `<form>`s is a bad idea because it will lead to lot of code.
55. Using `useRef()` is also a bad idea to handle a `<form>` because resetting a `<form>` using useRef() is discouraged. Lot of code eventually.
56. We can also use the ``FormData()` browser API to handle the form.
57. You can reset a `<form>` using `form.reset()` function over it.
58. You can also reset the form using `<button type="reset" >Reset</button>`.
59. [Formatting currency](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
60. We generally use @reduxjs/toolkit to implement redux with react.
61. We set up a redux store using configureStore() that we get from @reduxjs/toolkit.
62. useSelector() is used to select data from redux store.
63. useDispatch() hook is used to call reducer functions of the redux store.
64. Both useSelector() and useDispatch() are part of react-redux library.
65. Reducers are always side-effect free. Whether those reducer functions belong to redux or useReducer() hook. So we cannot fire an HTTP request from inside of any reducer function.
66. When we deal with side-effects along with redux or useReducer() (or probably with useContext() hook too) hook, we use either useEffect() or we handle them inside action creator.
67. Prefer reducers when we have to write synchronous and side-effect free code. Like data transformation. We should not use components or action creators for such requests.
68. For async code or code with side-effects one should prefer action creators or components. And never use reducers for such code. And generally we use action creator thunks for that. [Action creators](https://github.com/ankurnecessary/11-react-advanced-redux/blob/main/src/store/cart-action-creators.js)
69. [How to use redux dev-tool in the browser?](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600378#questions)
70. [React Router website](https://reactrouter.com/en/main)
71. `npm install react-router-dom` Use this command to install react-router-dom and work with react router.
72. [A different approach of defining routes](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/35733844#questions)
73. The paths in the children below start with '/'. This means these paths are **absolute paths** and if the domain is `http://example.com` then `{ path: '/products', element: <ProductsPage /> }` will take the control to `http://example.com/products`.

```Javascript
const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/products',
          element: <ProductsPage />
        },
        {
          path: '/products/:productId',
          element: <ProductDetailPage />
        }
      ]
    }
  ]);
```

74. The paths in the children below don't start with '/'. This means these paths are **relative paths** and if the domain is `http://example.com` then `{ path: 'products', element: <ProductsPage /> }` will take the control to `http://example.com/root/products`.

```Javascript
const router = createBrowserRouter([
    {
      path: '/root',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true
          element: <HomePage />
        },
        {
          path: 'products',
          element: <ProductsPage />
        },
        {
          path: 'products/:productId',
          element: <ProductDetailPage />
        }
      ]
    }
  ]);
```

75. `<Link to=".." relative='path'>Back</Link>` 'relative' property in `<Link>` works only for relative url in `to` attribute. It has 2 probable values `path` or `route`.
76. [Official react router website](https://reactrouter.com/en/main/start/tutorial)
77. [Eraser.io is an amazing tool for preparing diagrams like ER Diagrams](https://www.youtube.com/watch?v=guOcIILSsiQ)
78. [A lecture to understand basics of react routing](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/35733928#questions)
79. We need not to get worry about the order in which routes are defined. React router is smart enough to give required specificity to the route definitions.(react-router)
80. An async function always returns a promise but loader functions of react-router don't return a promise even if an async function is used. Instead we will get the end result of the async function in the form of an object or string or some other value but not promise.
81. You can use useLoaderData() in the element that is assigned to the route AND in all components that might be used inside that element.
82. We use useRouteError() hook to extract the errors thrown by the loader functions.
83. In loader functions, we generally throw `throw new Response()` instead of `throw new Error()`. This helps in handling different kind of errors differently on error page. May be on the basis of status code of the error.
84. Another enhancement is to use `json()` function provided by `react-router-dom` instead of `new Response()`. This is a utility which will decrease the amount of code to be written to throw errors in loader function.
85. Like `loader()` functions we have `action()` functions which can be bound to a route to handle the form submission via that route.
86. Tool - [locatorjs](https://www.locatorjs.com/) along with "custom link" set to 'vscode://file/${projectPath}${filePath}:${line}:${column}' helps in locating the react components in vscode when alt + click is clicked on the components in the browser window with locatorjs extension installed.(https://github.com/microsoft/vscode/issues/197450)
87. Youtube - react js video - https://www.youtube.com/watch?v=B91wc5dCEBA Must watch the video.
88. `useSubmit()` hook is used to submit a request to the router action function. It can be done in the following way.

```Javascript
import { Link, useSubmit } from 'react-router-dom';
...
const submit = useSubmit();
function startDeleteHandler () {
  const proceed = window.confirm('Are your sure?');
  if (proceed) {
    // we can use 'action' here if we want to use the action function of some other route.
    // Otherwise(if action is not mentioned) it will use the action function of same route
    // null mentioned below is so because we are not sending any data to the action function
    // If we want to send any data then we will replace null with that data

    // submit(null, { method: 'DELETE', action: '/a-different-path' });
    submit(null, { method: 'DELETE' });
  }
}
```

89. We can use react-router's `useNavigation()` hook to find the current state of the navigation or form submission.

```Javascript
  import { useNavigation } from 'react-router-dom';
  const navigation = useNavigation();
  // It will give you multiple states
  const isSubmitting = navigation.state === 'submitting';
```

[Eslint configuration - Best linting configuration is to use "format on save" and don't use "formatting option of ES Lint"](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/8231814#questions/20789494)

[This link helps in setting up the most important rule that will help in highlighting the unused variables and highlighting the undeclared variable usage](https://www.dhiwise.com/post/essential-eslint-rules-for-react#1-react-jsx-uses-react-)

[To show errors for unused variables / undeclared variables via eslint](https://eslint.org/docs/latest/rules/no-undef)

[Refs vs State Values](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/39836310#questions)

In the code below we are iterating over an array of ids i.e. **storedIds** and on the basis of ids we are fetching places. Finally, we are storing those places in an array and assigning it to variable **storedPlaces**.

```Javascript
const storedPlaces = storedIds.map((id) => {
  return AVAILABLE_PLACES.find((place) => place.id === id);
});
```

A way of shuffling the array elements.

```Javascript
shuffledAnswers.sort(() => Math.random() - 0.5);
```

A way of using FormData()

```Javascript
const fd = new FormData(<form>);
const acquisitionChannel = fd.getAll('acquisition');
const data = Object.fromEntries(fd.entries());
data.acquisitionChannel = acquisitionChannel;
console.log(data);
```

If you don't want a parameter's value to be undefined, you can define it's default value like so:

```javascript
function hello(data = '') {
  // Now data will never be undefined
}
```

[React Folder structure](https://www.youtube.com/watch?v=UUga4-z7b6s)

Generates an random hash in browser.

```javascript
crypto.randomUUID();
```
