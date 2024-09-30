import React from 'react'
import { Link } from 'react-router-dom'
import './Error.scss';

export default function Error() {
  return (
    <div className='error-page'>
      <div className='error-wrap'>
        <h1>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link to="/">Home</Link>
      </div>
    </div>
  )
}
