"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  {
    name: "Manage Sites",
    id: "manageSites",
    href: "/manage-sites",
  },
  {
    name: "Dashboard",
    id: "dashboard",
    href: "/dashboard",
  },
];
export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-3">
      {categories.map(({ name, id, href }) => (
        <Link
          href={href}
          key={id}
          className={`py-2 px-5 text-gray-500 ${pathname === href ? "text-sky-500 border-b-2 border-sky-500" : ""}`}
        >
          {name}
        </Link>
      ))}
    </nav>
  );
}
