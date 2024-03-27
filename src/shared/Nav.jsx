import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-[1px] text-[#23BE0A] border-[#23BE0A] text-lg font-semibold rounded-lg px-5 py-[14px]"
              : "text-gray-900 text-lg font-medium"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedbooks"
          className={({ isActive }) =>
            isActive
              ? "border-[1px] text-[#23BE0A] border-[#23BE0A] text-lg font-semibold rounded-lg px-5 py-[14px]"
              : "text-gray-900 text-lg font-medium"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagetoread"
          className={({ isActive }) =>
            isActive
              ? "border-[1px] text-[#23BE0A] border-[#23BE0A] text-lg font-semibold rounded-lg px-5 py-[14px]"
              : "text-gray-900 text-lg font-medium"
          }
        >
          Page To Read
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 lg:py-10 shadow-none px-0">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/" className="text-[28px] font-bold">
            Book Vibe
          </Link>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button size="lg" className="hidden lg:inline-block bg-[#23BE0A]">
                <span>Sing In</span>
              </Button>
              <Button size="lg" className="hidden lg:inline-block bg-[#59C6D2]">
                <span>Sign Up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth size="lg" className="bg-[#23BE0A]">
              <span>Log In</span>
            </Button>
            <Button fullWidth size="lg" className="bg-[#59C6D2]">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;
