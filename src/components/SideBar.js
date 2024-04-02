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
    <div className="p-3 w-60 fixed left-0 overflow-y-scroll h-full">
      <ul className="border-b-2">
        <div className="flex items-center px-3 h-10 w-full">
          <Home className="mr-4" />
          <li className="w-full">
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Sparkles className="mr-4" />
          <li className="w-full">Shorts</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <ListVideo className="mr-4" />
          <li className="w-full">Subscriptions</li>
        </div>
      </ul>
      <ul className="border-b-2">
        <div className="flex items-center px-3 h-10">
          <li className="font-semibold">You</li>
          <ChevronRight className="w-full" />
        </div>
        <div className="flex items-center px-3 h-10">
          <SquareUserRound className="mr-4" />
          <li className="w-full">Your channel</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <History className="mr-4" />
          <li className="w-full">History</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <PlaySquare className="mr-4" />
          <li className="w-full">Your videos</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Clock className="mr-4" />
          <li className="w-full">Watch later</li>
        </div>
        <div className="flex items-center px-3 h-10">
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
      <h1 className="px-3 font-bold pt-5">Explore</h1>
      <ul>
        <div className="flex items-center px-3 h-10">
          <Flame className="mr-4" />
          <li className="w-full">Trending</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <ShoppingBag className="mr-4" />
          <li className="w-full">Shopping</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Music2 className="mr-4" />
          <li className="w-full">Music</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Clapperboard className="mr-4" />
          <li className="w-full">Movies</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Radio className="mr-4" />
          <li className="w-full">Live</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Gamepad2 className="mr-4" />
          <li className="w-full">Gaming</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Newspaper className="mr-4" />
          <li className="w-full">News</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Trophy className="mr-4" />
          <li className="w-full">Sports</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Lightbulb className="mr-4" />
          <li className="w-full">Courses</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Shirt className="mr-4" />
          <li className="w-full">Fashion & Beauty</li>
        </div>
        <div className="flex items-center px-3 h-10">
          <Podcast className="mr-4" />
          <li className="w-full">Podcasts</li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
