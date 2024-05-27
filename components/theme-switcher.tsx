'use client'

import { BsMoon, BsSun } from "react-icons/bs"
import { useEffect, useState } from "react"

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Light)

  const toggleTheme = () => {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark)
      window.localStorage.setItem('theme', Theme.Dark)
    } else {
      setTheme(Theme.Light)
      window.localStorage.setItem('theme', Theme.Light)
    }
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as Theme | null

    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [])

  return (
    <button
      className="fixed flex items-center justify-center bottom-5 right-5 rounded-full bg-white bg-opacity-80
      w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl
      hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun/> : <BsMoon/>}
    </button>
  )
}

export default ThemeSwitcher
