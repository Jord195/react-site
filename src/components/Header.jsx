import { useState } from 'react'
import Menu from './Menu'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <header class="absolute z-50 h-20 w-full bg-transparent">
      <Menu/>
    </header>
  )
}

export default Header
