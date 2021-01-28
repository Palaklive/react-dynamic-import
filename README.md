
### This project is about introduction of dynamic import before the code splitting

Suppose you have a page that renders different components depending on user input. At the moment, managed to solve the issue I was having and have shown my code below which shows how I solved it.  

#### App.js 

```JSX
import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState("");
  const [DynamicComponent, setDynamicComponent] =
  React.useState(null);
  React.useEffect(() => {
   if (name) {
   const Component = React.lazy(() => import(`./${name}.jsx`));
   return setDynamicComponent(Component);
  }
  return setDynamicComponent(null);
  }, [name]);

  function loadComponent(event) {
   const { value } = event.target;
   setName(value);
  }
  return (
   <Suspense fallback={<div>Loading...</div>}>
     <ErrorBoundary>
       <select value={name} onChange={loadComponent}>
       <option value="">None</option>
       <option value="ComponentOne">Component One</option>
       <option value="ComponentTwo">Component Two</option>
       <option value="ComponentThree">Component Three</option>
       </select>
      {DynamicComponent && <DynamicComponent />}
     </ErrorBoundary>
   </Suspense>
  );
}
```
 

 

This method allows me to add/remove components very quickly, as I only need to change one import line at a time. 

#### Project 

This project is using [Create React App](https://github.com/facebook/create-react-app).

##### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
