import React from "react";
import ClassB from "./ClassB";

const ClassA = ({ value }) => {
  return (
    <div>
      <h3>this is classA component</h3>

      <ClassB value={value} />
    </div>
  );
};
export default ClassA;
