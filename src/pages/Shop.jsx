import React, {useState, useEffect} from "react";
import Product from '../components/Product';
import './Shop.css'

function Shop() {

    const [items, setItems] =useState([])

    useEffect(()=>{
        fetch ('http://localhost:3001/items')
        .then((resp) => resp.json())
        .then((items) => setItems(items))

    }, []);

    const List =items.map((item) => {
        return(
            <Product key={item.id} id={item.id} name={item.name} price={item.price} src={item.src}/>
        )
    })
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>GORIGO ONLINE SHOP </h1>
            </div>

            <div className="items">
                 {List}
            </div>
        </div>
    )
}

export default Shop;