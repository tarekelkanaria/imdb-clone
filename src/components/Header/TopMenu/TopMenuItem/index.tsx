import Link from "next/link";
import { IconType } from "react-icons/lib/esm/iconBase";

const TopMenuItem: React.FC<{
  title: string;
  path: string;
  Icon: IconType;
}> = ({ title, path, Icon }) => {
  return (
    <li className="mr-4 lg:mx-2 my-2">
      <Link href={path} className="hover:text-amber-600 transition">
        <Icon className="text-2xl sm:hidden" />
        <h2 className="hidden sm:inline text-sm ">{title}</h2>
      </Link>
    </li>
  );
};

export default TopMenuItem;
