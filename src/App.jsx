import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        Header
      </header>
      <nav>
        Nav
      </nav>
      <main>
        Main
      </main>
      <footer>
        footer
      </footer>
    </>
  )
}

export default App
