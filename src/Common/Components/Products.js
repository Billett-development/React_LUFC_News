import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_Products.scss';

const DEFAULT_CLASSNAME = "hero";

export default function Products() {
    return(
        <div className="section-products">
        <div className="container">
        <div className="products__heading">
            <h3 className="section-headings">best selling products</h3>
        </div>

        <div className="products__items">
            <div className="products__items-1">
                
                <span className="title">Product title</span>
                <span className="info">info about the product</span>
            </div>
            <div className="products__items-2">
                <span className="title">Product title</span>
                <span className="info">info about the product</span>
            </div>
            <div className="products__items-3">
                <span className="title">Product title</span>
                <span className="info">info about the product</span>
            </div>
        </div>
    </div>
    </div>
    );
}