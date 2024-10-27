import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../activeLink";

const navItems = [
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
  { path: "/about", text: "About" }
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-3 bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center gap-2" href="/">
        <HomeIcon />
        <span>Home</span>
      </Link>
      <div className="flex flex-1" />
      {navItems.map(({ path, text }) => (
        <ActiveLink key={path} path={path} text={text} />
      ))}
    </nav>
  );
};
