import React from "react";
import shoes from './../shoes.json'
import { Link, } from "react-router-dom";

function Products() {
    console.log(shoes)
    return (
        <div >
            <h1>
                Products
            </h1>
            <div className='container'>
                {Object.keys(shoes).map((keyName) => {
                    const shoe = shoes[keyName];
                    return (
                        // 
                        <div key={keyName}
                            className='shoeConatiner'>
                            <Link to={`/products/${keyName}/`}>
                                <h3>{shoe.name}</h3></Link>
                            <img src={shoe.img} alt="" />
                        </div>
                        // </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default Products;
