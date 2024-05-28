'use client'

import React, { createContext, useContext, useEffect, useState } from "react"

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider')
  }

  return context
}

export default ThemeContextProvider
