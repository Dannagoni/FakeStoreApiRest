import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="bg-blue950  text-white py-5 px-6">
      <Link to='/'>
      ApiCommerce
      </Link>
    </div>
  )
}
