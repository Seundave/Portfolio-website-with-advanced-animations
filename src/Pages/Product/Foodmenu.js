import React from 'react'
import './style.css'

const Foodmenu = ({items})=> {
  return (
     <div className="section-center">
       {items.map((menuItem)=>{
         const {id,img,alt,name,desc,price,button} = menuItem;
         return <article key={id} className="menuItem">
           <img src={img} alt={alt} className='photo'/>
           <div className="item-info">
            <header>
              <h4>{alt}</h4>
              <h4 className='price'>{price}</h4>
            </header>
            <p className='text-item'>{desc}</p>
              <button className='item-button'> Add to cart</button>
              <button className='item-button'> Order Now</button>
           </div>
         </article>

         
       })}
     </div>
  )
}

export default Foodmenu