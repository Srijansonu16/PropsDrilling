import React from "react";
import ClassA from "./ClassA";

const name = "Srijan";
const Main = () => {
  return (
    <div>
      <h2>this is main component</h2>
      <ClassA value={name} />
    </div>
  );
};
export default Main;
