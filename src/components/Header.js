import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Bell, CircleUserRound, Menu, Search, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestions(data[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  useEffect(() => {
    // API call
    // make an api call after every key press but if the difference between
    //2 api calls is <200ms decline the api call {debouncing}

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        // getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex px-4 justify-between items-center fixed w-full top-0 bg-white">
      <div className="flex items-center h-12 w-40">
        <div className="p-2 hover:bg-[#f2f2f2] hover:rounded-full">
          <Menu onClick={() => toggleMenuHandler()} />
        </div>
        <div className="px-4 h-5 w-full" onClick={() => navigate("/")}>
          <img
            className="w-full h-full"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&usqp=CAU"
          />
        </div>
      </div>
      <div className="h-12">
        <div className="flex justify-center items-center h-full py-1">
          <form
            className="flex items-center h-full"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="border rounded-l-full pl-4 pr-1 h-full w-[568px]">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                className="outline-none h-full w-full"
              />
            </div>
            <button
              type="submit"
              className="border rounded-r-full px-4 bg-slate-100 h-full "
            >
              <Search strokeWidth={0.5} />
            </button>
          </form>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[34rem] rounded-lg shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 px-4 shadow-sm hover:bg-gray-100 "
                >
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="w-56 flex justify-end">
        <div className="flex items-center">
          <div className="mr-2 p-2 hover:bg-[#f2f2f2] hover:rounded-full">
            <Video />
          </div>
          <div className="mr-2 p-2 hover:bg-[#f2f2f2] hover:rounded-full">
            <Bell />
          </div>
          <div className="mr-2 p-2 hover:bg-[#f2f2f2] hover:rounded-full">
            <CircleUserRound />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
