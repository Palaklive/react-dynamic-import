import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

export default function App() {
  const [name, setName] = React.useState("");
  const [DynamicComponent, setDynamicComponent] = React.useState(null);

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
