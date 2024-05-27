import { BsSun } from "react-icons/bs"


const ThemeSwitcher = () => {
  return (
    <button
      className="fixed flex items-center justify-center bottom-5 right-5 rounded-full bg-white bg-opacity-80
      w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl
      hover:scale-[1.15] active:scale-105 transition-all"
    >
      <BsSun/>
    </button>
  )
}

export default ThemeSwitcher
