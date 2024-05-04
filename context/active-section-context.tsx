'use client'

import React, { createContext, useState } from "react"
import type { SectionName } from "@/lib/types"

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

const ActiveSectionContextProvider = ({ children }: ActiveSectionContextProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionName>('Home')

  // Used to prevent scroll observer from firing for multiple sections when a link is clicked.
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
    }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export const useActiveSectionContext = () => {
  const context = React.useContext(ActiveSectionContext)
  if (!context) {
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
  }

  return context
}

export default ActiveSectionContextProvider
