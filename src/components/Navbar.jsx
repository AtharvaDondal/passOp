import React from 'react'

const Navbar = () => {
  return (
    <nav className = "bg-purple-200 flex items-center justify-between px-4">
      <div className="logo font-bold">
        PassOp
      </div>
      <ul>
        <li className='flex gap-4'>
            <a href="/">Home</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
