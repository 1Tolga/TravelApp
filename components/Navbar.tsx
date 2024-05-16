"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  var menuOpen = false;

  function handleMenuClick() {
    var menuList = document.getElementById("menuList");
    var menuButton = document.getElementById("menuButton");
    menuOpen = !menuOpen;
    menuList?.classList.toggle("translate-y-[222px]");

    {
      menuOpen
        ? menuList?.classList.add("lg:translate-y-[0px]")
        : menuList?.classList.remove("lg:translate-y-[0px]");
    }
  }

  const handleNewClick = () => {
    console.log("");
  };

  return (
    <div className="bg-white w-full h-[72px] fixed z-50">
      <nav className="bg-white flexBetween max-container padding-container relative py-5">
        <Link href="/">
          <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
        </Link>
        <ul
          id="menuList"
          className={`z-30 h-auto gap-9 lg:flex flex-col block absolute lg:relative lg:flex-row w-full lg:gap-12 lg:top-0 top-[-151px] lg:justify-center left-0 bg-white bg-opacity-95`}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.key} className="">
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
            onClick={() => handleNewClick()}
          />
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          id="menuButton"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={handleMenuClick}
        />
      </nav>
      <div className=" hidden absolute bg-gray-300 w-full h-auto top-[250px] left-0 z-30 flex-col lg:hidden p-10 flex items-center">
        <ul className="">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="block regular-16 flexCenter cursor-pointer transition-all hover:font-bold text-gray-40 pt-5"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:hidden pt-10">
          <Button
            type="button"
            title="Login"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
