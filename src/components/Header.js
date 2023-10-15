import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-lg items-center">
      <div className="flex col-span-1">
        <img
          className="h-6"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
        />
        <img
          className="h-6 mx-2"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"
        />
      </div>
      <div className="col-span-10">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full pl-4 outline-none shadow-inner"
        />
        <button className="border border-gray-400 bg-gray-100 p-2 rounded-r-full px-4">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
