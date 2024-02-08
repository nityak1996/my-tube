import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming", "Songs", "Soccer", "Cooking"];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((singleValue,index) => (
        <Button key={index} name={singleValue} />
      ))}
    </div>
  );
};

export default ButtonList;
