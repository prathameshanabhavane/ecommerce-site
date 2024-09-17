import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <h1>Error</h1>
      <p>No data found <Link to="/">Home</Link></p>
    </div>
  )
}
