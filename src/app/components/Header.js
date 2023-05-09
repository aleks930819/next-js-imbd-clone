import Link from 'next/link';
import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex ">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center gap-5">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl ">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline ">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
