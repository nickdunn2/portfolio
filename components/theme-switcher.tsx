'use client'

import { BsMoon, BsSun } from "react-icons/bs"
import { useThemeContext } from "@/context/theme-context"

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <button
      className="fixed flex items-center justify-center bottom-5 right-5 rounded-full bg-white bg-opacity-80
      w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl
      hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun/> : <BsMoon/>}
    </button>
  )
}

export default ThemeSwitcher
