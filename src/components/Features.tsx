import { useEffect, useState } from "react"
import Feature from "./Feature"

const Features = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrollPosition])

  return (
    <section className="container mx-auto flex flex-col items-center gap-3 text-sm lg:text-base md:flex-row sm:justify-between xl:justify-around py-12">
      <Feature text="Personalizirano" scroll={scrollPosition} goal={100} />
      <Feature text="Ručno rađeno" scroll={scrollPosition} goal={180} />
      <Feature text="Brza izrada" scroll={scrollPosition} goal={260} />
      <Feature text="Izrada po narudžbi" scroll={scrollPosition} goal={340} />
    </section>
  )
}

export default Features
