import React from "react";
import ClassC from "./ClassC";

const ClassB = ({ value }) => {
  return (
    <div>
      <h4>this is classB component</h4>
      <ClassC value={value} />
    </div>
  );
};
export default ClassB;
