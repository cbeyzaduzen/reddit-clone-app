import Image from "next/image";
import redditLogo from "/Users/cbeyzaduzen/Desktop/Projeler/reddit-clone-app/assets/images/reddit-logo.png"

const Header = () => {
  return (
    <div>
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer" >
        <Image className="object-contain" src={redditLogo} alt="image" />
      </div>
    </div>
  );
};

export default Header;
