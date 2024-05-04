import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active-section-context"
import { useEffect } from "react"
import { SectionName } from "@/lib/types"

/**
 * Reusable hook to set active section when it scrolls into view.
 *
 * @param sectionName | SectionName
 * @param threshold | Percentage of the section that must be in view to trigger.
 */
export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75,
) => {
  const { ref, inView } = useInView({
    threshold,
  })
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && (Date.now() - timeOfLastClick > 1000)) {
      setActiveSection(sectionName)
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return { ref }
}
