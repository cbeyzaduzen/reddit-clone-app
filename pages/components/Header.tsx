import Image from "next/image";
import redditLogo from "/Users/cbeyzaduzen/Desktop/Projeler/reddit-clone-app/assets/images/reddit-logo.png";
import {
  ChevronDownIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import {
  ChatBubbleLeftEllipsisIcon,
  GlobeAltIcon,
  PlusIcon,
  SparklesIcon,
  VideoCameraIcon,
  MegaphoneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm ">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image className="object-contain" src={redditLogo} alt="image" />
      </div>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline ">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search */}
      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button type="submit" hidden />
      </form>

      <div className="mx-5 hidden items-center space-x-2 text-gray-500 lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeAltIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatBubbleLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <MegaphoneIcon className="icon" />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/* Sign in / Sign out button */}
      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image
            className="object-contain "
            src="https://links.papareact.com/23l"
            alt=""
            width={20}
            height={20}
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
};

export default Header;
