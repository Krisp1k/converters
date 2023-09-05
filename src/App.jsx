import { React } from 'react'
import { Link } from "react-router-dom"

import "./App.css"

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/convert/instagram" className='link'>Instagram video downloader</Link></li>
        <li><Link to="/convert/tiktok" className='link'>TikTok video downloader</Link></li>
        <li><Link to="/convert/facebook" className='link'>Facebook video downloader</Link></li>
        <li><Link to="/convert/twitter" className='link'>Twitter video downloader</Link></li>
      </ul>
    </div>
  )
}

export default App
