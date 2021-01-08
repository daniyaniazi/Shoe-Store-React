import React from "react";
import { useParams } from 'react-router-dom'
import shoes from './../shoes.json'

function Items() {
    const { id } = useParams();
    const shoe = shoes[id];
    if (!shoe) {
        return <h2>Shoe Product not found</h2>
    }
    return (
        <div className='itemConatiner'>
            <img src={shoe.img} alt="" />
            <div>
                <h1>{shoe.name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores voluptate vero repudiandae aliquam impedit. Quod architecto qui, sint unde, atque ad est dolorem, error ipsam deserunt ullam voluptatibus hic nostrum!</p>
            </div>
        </div>
    );
}

export default Items;
