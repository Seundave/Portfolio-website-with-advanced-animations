
import React, { useState } from 'react';
import Foodmenu from './Foodmenu'
import Categories from './Categories';
import items from './Data';
import './style.css'

const allCategories = ['all', ...new Set (items.map((item)=> item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([allCategories]);

  const filterItems = (category) => {
    if (category === 'All'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item)=> item.category === category)
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div class="title">
          <h2> Our Menu </h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Foodmenu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;