import  { type FC } from "react";
import { Link } from "react-router-dom";
import Button from './../button/index';

const Header: FC = () => {
  return (
    <header className="w-full z-20 glass-dark border-white/10 border-x-0!">
      <div className="max-width flex-between padding-x padding-y">
        <Link to="/" className="flex items-center gap-3 ">
          <img
            src="/bmwlogo.png"
            alt="Logo"
            height={50}
            width={50}
            className="drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-xl font-bold text-transparent text-gradient sm:block">Car Rental</h1>
        </Link>

        <Button text="Kaydol" name="kaydol"/>
        
      </div>
    </header>
  );
};

export default Header;
