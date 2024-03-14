"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

export function ModeToggle() {
  const { setTheme } = useTheme()
    
  return (
    <div>
      <CiLight onClick={() => setTheme("light")}/>
      <MdDarkMode onClick={() => setTheme("dark")} />
    </div>
  )
}
