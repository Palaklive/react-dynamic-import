import React from "react";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

export default function ComponentList({ name }) {
  switch (name) {
    case "ComponentOne":
      return <ComponentOne />;
    case "ComponentTwo":
      return <ComponentTwo />;
    case "ComponentThree":
      return <ComponentThree />;
    default:
      return null;
  }
}
