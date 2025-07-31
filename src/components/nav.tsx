"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdWbSunny, MdNightlight, MdMenu, MdClose } from "react-icons/md";

import MediaQuery from "@/components/media-query";

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "About", href: "/about/" },
  { title: "Publications", href: "/publications/" },
  { title: "Teaching", href: "/teaching/" },
];

function NavItemComponent({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);

  const style = isActive
    ? "font-medium text-off-black dark:text-off-white"
    : "font-light text-grey-500 hover:text-off-black dark:hover:text-off-white";

  return (
    <li>
      <Link
        href={item.href}
        className={`${style} relative block px-2 py-1 text-base transition after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-blue-start after:to-blue-stop after:opacity-0 after:transition-opacity after:duration-300 after:content-[''] hover:after:opacity-100 dark:after:from-purple-start dark:after:to-purple-stop`}
      >
        {item.title}
      </Link>
    </li>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center rounded-full border border-grey-300 bg-transparent p-2.5 ring-grey-300 transition-all hover:ring-2 hover:ring-offset-2 dark:border-grey-700 dark:bg-transparent dark:ring-grey-200 dark:hover:ring-1 dark:hover:ring-offset-2"
    >
      {theme === "light" ? (
        <MdWbSunny className="h-4 w-4 text-grey-800 dark:text-grey-200" />
      ) : (
        <MdNightlight className="h-4 w-4 text-grey-800 dark:text-grey-200" />
      )}
    </button>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-off-black dark:text-off-white">
        {isOpen ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-grey-200 bg-gray-50/95 backdrop-blur-sm dark:border-grey-700 dark:bg-gray-900/95">
          <nav className="px-6 py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-base font-light text-grey-500 transition hover:text-off-black dark:hover:text-off-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-grey-200 pt-4 dark:border-grey-700">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default function Nav() {
  return (
    <header className="fixed z-50 w-full bg-gray-50/80 px-6 py-4 backdrop-blur-sm dark:bg-gray-900/80 md:px-14">
      {/* Desktop Navigation */}
      <MediaQuery query="(min-width: 768px)">
        <div className="grid grid-cols-3 items-center justify-items-stretch">
          <Link
            href="/"
            className="group relative justify-self-start px-2 py-1 text-xl font-bold text-off-black dark:text-off-white"
          >
            <span className="opacity-100 transition duration-300 group-hover:opacity-0">
              @ajo41
            </span>
            <span className="absolute left-2 whitespace-nowrap bg-gradient-to-r from-blue-start to-blue-stop bg-clip-text text-transparent opacity-0 transition duration-300 group-hover:opacity-100 dark:from-purple-start dark:to-purple-stop">
              Alistair O&apos;Brien
            </span>
          </Link>
          <nav className="justify-self-center">
            <ul className="flex items-center gap-24">
              {navItems.map((item) => (
                <NavItemComponent key={item.href} item={item} />
              ))}
            </ul>
          </nav>
          <div className="justify-self-end">
            <ThemeToggle />
          </div>
        </div>
      </MediaQuery>

      {/* Mobile Navigation */}
      <MediaQuery query="(max-width: 767px)">
        <div className="relative flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-off-black dark:text-off-white">
            @ajo41
          </Link>
          <MobileMenu />
        </div>
      </MediaQuery>
    </header>
  );
}
