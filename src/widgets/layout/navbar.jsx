import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";



 
function NavList() {
  const authStatus = true;

  const navItems = [
    {
      name: "Home",
      slug: "/home",
      active: true,
    },
    {
      name: "Signin",
      slug: "/sign-in",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/sign-up",
      active: !authStatus,
    },
  
    {
      name: "Dashboard",
      slug: "/dashboard",
      active: authStatus,
    },
    {
      name: "Logout",
      slug: "/",
      active: authStatus,
    },
  ];
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center  lg:gap-6">

{
  navItems.map((item, index) => {
    return (<li
               key={index}
              >
                <Link to={item.slug} className="flex items-center text-white hover:text-blue-500 transition-colors text-base md:text-lg">
                  {item.name}
                </Link>
            </li>)

  })
}


    </ul>
  );
}
 
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="mx-auto md:max-w-screen-xl px-6 border bg-blue-gray-900 min-w-[430px] py-3">
      <div className="flex items-center justify-between  text-white">
        <img src="https://storyvord.com/img/logo.svg" alt="logo"  className=" w-40 cursor-pointer py-1.5" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}


export default NavBar;