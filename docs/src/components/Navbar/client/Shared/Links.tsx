"use client";
import { usePathname } from "next/navigation";

import { NavLink } from "../../Link/index.js";
import { LINKS } from "../../constants.js";

export interface NavLinksProps {
  type: "desktop" | "mobile";
}

export const NavLinks = ({ type }: NavLinksProps) => {
  const pathname = usePathname();
  return (
    <>
      {LINKS.map(({ link, label }) => (
        <NavLink
          key={`navlink-${type}-screen-${label}`}
          href={link}
          isActive={!!pathname && (link === "/" ? pathname === link : pathname.startsWith(link))}
        >
          {label}
        </NavLink>
      ))}
    </>
  );
};
