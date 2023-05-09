import NavbarItem from './NavbarItem';

const Navbar = () => {
  return (
    <nav
      className="
     flex justify-center gap-5
      dark:bg-gray-600 bg-amber-200 lg:text-lg p-5
    "
    >
      <NavbarItem title="Trending" param="fetchTrening" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </nav>
  );
};

export default Navbar;
