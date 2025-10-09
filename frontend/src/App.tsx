import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

export default function App() {
  // theme controlles
  const localTheme = String(localStorage.getItem("theme")) || 'light';
  const [theme, setTheme] = useState<string>(localTheme);
  useEffect(()=>{
     localStorage.setItem("theme", theme)
     document.documentElement.classList.add(" "+theme)
    },
    [theme]
  )

  


  return (
    <>
      <Header 
        setTheme={setTheme}
      />
      <Footer />
    </>
  )
}

