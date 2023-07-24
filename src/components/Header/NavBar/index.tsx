import NavBarItem from "./NavBarItem";

const NavBar = () => {
  return (
    <ul className="flex justify-center items-center space-x-4 bg-amber-100 dark:bg-gray-600 p-4">
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="Top Rated" param="topRated" />
    </ul>
  );
};

export default NavBar;
