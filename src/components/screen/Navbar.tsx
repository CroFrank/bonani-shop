import { useState } from "react"

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible)
  }

  return (
    <div className="bg-roza1 sticky top-0 z-50 w-full p-5 flex items-center shadow-2xl">
      <nav className="container flex md:flex-col justify-between items-center mx-auto h-full">
        <div className="flex items-center">
          <a href="/" className="text-4xl font-bold md:pt-7 md:pb-5">
            <img src="/LOGO.ico" alt="bonani logo" />
          </a>
        </div>
        <div className="hidden space-x-4 md:flex md:mt-auto">
          <a
            href="/"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            Home
          </a>
          <a
            href="/products"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            Cake-Toppers
          </a>
          <a
            href="/contact"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            Kontakt
          </a>
          <a
            href="/about"
            className="text-slate-600 hover:text-slate-500 hover:underline"
          >
            O Nama
          </a>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isMenuVisible && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-90 text-white"
          onClick={() => toggleMenu()}
        >
          <div className="m-5 flex w-full flex-col items-start justify-between bg-components">
            <div className="flex w-full items-center justify-between p-5">
              <a href="/" className="text-xl font-bold">
                BONANI
              </a>
              <button
                className="p-5 text-xl text-white font-semibold"
                onClick={() => toggleMenu()}
              >
                X
              </button>
            </div>
            <div className="my-4 w-full border-t-2"></div>
            <div className="flex flex-col items-start justify-center">
              <a
                href="/"
                className="p-5 hover:underline"
                onClick={() => toggleMenu()}
              >
                Home
              </a>
              <a
                href="/products"
                className="p-5 hover:underline"
                onClick={() => toggleMenu()}
              >
                Cake-Toppers
              </a>
              <a
                href="/contact"
                className="p-5 hover:underline"
                onClick={() => toggleMenu()}
              >
                Kontakt
              </a>
              <a
                href="/contact"
                className="p-5 hover:underline"
                onClick={() => toggleMenu()}
              >
                O Nama
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
