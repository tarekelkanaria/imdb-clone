"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const NavBarItem: React.FC<{ title: string; param: string }> = ({
  title,
  param,
}) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <li
      className={`text-semibold hover:text-amber-600 p-2 lg:text-lg ${
        genre &&
        genre === param &&
        "underline underline-offset-8 decoration-4 decoration-amber-500 text-amber-600 rounded-lg"
      }`}
    >
      <Link href={`/?genre=${param}`}>{title}</Link>
    </li>
  );
};

export default NavBarItem;
