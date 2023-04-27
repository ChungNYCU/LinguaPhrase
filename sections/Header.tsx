import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

import Button from "@/components/Button";

// Define navigation links with label and path
const navigations = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

const Header = () => {
  // Use the theme hook from next-themes library to manage theme state
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use effect hook to set dark mode button as mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to render the dark mode button
  const renderDarkModeButton = () => {
    // If the theme mounted, do nothing
    if (!mounted) return null;

    // Determine the current theme from system default
    const currentTheme = theme === "system" ? systemTheme : theme;

    // If the current theme is dark, render a button that sets the theme to light
    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 duration-300 ease-in dark:bg-blue-500"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      // If the current theme is not dark, render a button that sets the theme to dark
      return (
        <Button
          className="bg-gray-200 duration-300 ease-in"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };

  // Return the header component with navigation links and dark mode button
  return (
    <header className="flex h-16 items-center justify-between">
      <>
        <ul className="flex gap-4">
          {navigations.map((nav) => (
            <Link href={nav.path} className="navbar" key={nav.label}>
              {nav.label}
            </Link>
          ))}
        </ul>
        <div className="flex flex-row items-center">
          {renderDarkModeButton()}
        </div>
      </>
    </header>
  );
};

export default Header;
