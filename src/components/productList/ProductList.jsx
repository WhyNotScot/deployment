import "./productList.css"
import React from "react"
import Product from "../product/Product"
import {products} from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
            <h1 className="pl-title">Check out my media & personal projects.</h1>
            <p className="pl-desc">
                 Below are links to my Social Medias, as well as upcoming links
                 for my future personal projects. Stop by for updates!
            </p>
            </div>
            <div className="pl-list">
                {products.map(item=>(
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
        </div>
    )
}

export default ProductList