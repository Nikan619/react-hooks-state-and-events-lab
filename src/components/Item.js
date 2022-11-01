import React,{useState} from "react";

function Item({ name, category }) {
   
const [inCart,setInCart]= useState(false)

const eventHandle=()=>{
  setInCart(!inCart)
}

  return (
    <li className={inCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={eventHandle} className="add">{inCart?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
