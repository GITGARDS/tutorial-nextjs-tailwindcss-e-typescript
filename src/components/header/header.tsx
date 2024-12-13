"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex items-center justify-start md:justify-center bg-primary py-2 sm:py-4 px-6 gap-6">
      <button className="md:hidden">
        <MdMenu size={24} />
      </button>

      <ul className="flex gap-4 items-center">
        <li className="my-2">
          <Link href={"/"} className="border px-1 py-2 rounded-md font-bold">
            CODARSE
          </Link>
        </li>

        <li className="hidden sm:block">
          <Link
            href={"/"}
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Pagina inicial
          </Link>
        </li>

        <li className="hidden sm:block">
          <Link
            href={"/cursos"}
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>

        <li className="hidden sm:block">
          <Link
            href={"https://blog.codarse.com"}
            target="_blank"
            className="flex items-center gap-1"
          >
            Blog
            <MdOpenInNew></MdOpenInNew>
          </Link>
        </li>
      </ul>
      <h1 className="sm:hidden">CodarSe - Pagina Inicial</h1>
    </nav>
  );
};
