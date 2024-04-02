import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Love",
  "Cooking",
  "News",
  "Cinema",
  "Editing",
  "UI/UX",
  "Git/GitHub",
  "Software",
];

const ButtonList = () => {
  return (
    <div className="flex fixed bg-white py-2 w-full">
      {list.map((catName) => (
        <Button key={catName} name={catName} />
      ))}
    </div>
  );
};

export default ButtonList;
