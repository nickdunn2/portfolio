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
      document.documentElement.classList.add(Theme.Dark)
    } else {
      setTheme(Theme.Light)
      window.localStorage.setItem('theme', Theme.Light)
      document.documentElement.classList.remove(Theme.Dark)
    }
  }

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('theme') as Theme | null

    if (storedTheme) {
      setTheme(storedTheme)

      if (storedTheme === Theme.Dark) {
        document.documentElement.classList.add(Theme.Dark)
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Theme.Dark)
      document.documentElement.classList.add(Theme.Dark)
    }
  }, [])

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
