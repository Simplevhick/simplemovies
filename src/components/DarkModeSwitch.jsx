"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mouthed, setMouthed] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => setMouthed(true), []);
  return (
    <div>
      {mouthed && (currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ))}
    </div>
  );
}
