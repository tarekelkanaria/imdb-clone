"use client";
import { useState, useEffect } from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <li>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonStarsFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </li>
  );
};

export default ModeSwitch;
