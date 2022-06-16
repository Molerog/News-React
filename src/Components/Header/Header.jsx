import "./Header.scss";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <div className="HeaderContainer">
      <Hero />
      <div className='NavbarContainer'>
      <Navbar />
      </div>
    </div>
  );
};

export default Header;
