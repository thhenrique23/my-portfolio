"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./utils";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            className={`
                    ${
                      link.path === pathname &&
                      "text-accent border-b-2 border-accent"
                    } 
                    capitalize font-medium hover:text-accent transition-all`}
            key={index}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
