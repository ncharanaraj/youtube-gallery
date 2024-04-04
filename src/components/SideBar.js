import {
  Clapperboard,
  Flame,
  Gamepad2,
  History,
  Home,
  Lightbulb,
  ListVideo,
  Music2,
  Newspaper,
  Podcast,
  Radio,
  Shirt,
  ShoppingBag,
  Sparkles,
  SquareUserRound,
  Trophy,
  PlaySquare,
  Clock,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-3 w-60 fixed left-0 overflow-y-scroll h-full bg-white">
      <ul className="border-b-2  pb-2 ">
        <div className="flex items-center px-3 h-10 w-full hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Home className="mr-4" />
          <li className="w-full">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Sparkles className="mr-4" />
          <li className="w-full">Shorts</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <ListVideo className="mr-4" />
          <li className="w-full">Subscriptions</li>
        </div>
      </ul>
      <ul className="border-b-2 py-2">
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <li className="font-semibold">You</li>
          <ChevronRight className="w-full" />
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <SquareUserRound className="mr-4" />
          <li className="w-full">Your channel</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <History className="mr-4" />
          <li className="w-full">History</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <PlaySquare className="mr-4" />
          <li className="w-full">Your videos</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Clock className="mr-4" />
          <li className="w-full">Watch later</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <ChevronDown className="mr-4" />
          <li className="w-full">Show more</li>
        </div>
      </ul>
      {/* <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul> */}
      <h1 className="px-3 font-bold pt-5 mb-2">Explore</h1>
      <ul>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Flame className="mr-4" />
          <li className="w-full">Trending</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <ShoppingBag className="mr-4" />
          <li className="w-full">Shopping</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Music2 className="mr-4" />
          <li className="w-full">Music</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Clapperboard className="mr-4" />
          <li className="w-full">Movies</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Radio className="mr-4" />
          <li className="w-full">Live</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Gamepad2 className="mr-4" />
          <li className="w-full">Gaming</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Newspaper className="mr-4" />
          <li className="w-full">News</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Trophy className="mr-4" />
          <li className="w-full">Sports</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Lightbulb className="mr-4" />
          <li className="w-full">Courses</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Shirt className="mr-4" />
          <li className="w-full">Fashion & Beauty</li>
        </div>
        <div className="flex items-center px-3 h-10 hover:bg-[#f2f2f2] hover:font-semibold hover:rounded-md">
          <Podcast className="mr-4" />
          <li className="w-full">Podcasts</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
