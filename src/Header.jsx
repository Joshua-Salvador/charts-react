import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
      <div className='header'>
        <header className='header__header'>
          <h1 className='header__title'>Select a chart to view</h1>
          <div className='header__charts'>
            <Link to="/piechart" className='header__chart'>
              <p>Pie Chart</p>
            </Link>
            <Link to='/linechart' className='header__chart'>
              <p className='header__chart'>Line Chart</p>
            </Link>
            <Link to='/doughnutchart' className='header__chart'>
              <p className='header__chart'>Doughnut Chart</p>
            </Link>
            <Link to='/barchart' className='header__chart'>
              <p className='header__chart'>Bar Chart</p>
            </Link>
          </div>
        </header>
      </div>
  )
}

export default Header
