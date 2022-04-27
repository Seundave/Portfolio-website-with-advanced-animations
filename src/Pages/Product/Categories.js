import React from 'react'
import './style.css'

function Categories({categories,filterItems}) {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={()=> filterItems('All')}> All</button>
      <button className="filter-btn" onClick={()=> filterItems('Breakfast')}> Breakfast</button>
      <button className="filter-btn" onClick={()=> filterItems('Lunch')}> Lunch</button>
      <button className="filter-btn" onClick={()=> filterItems('Dinner')}> Dinner</button>
    </div>
  )
};

export default Categories