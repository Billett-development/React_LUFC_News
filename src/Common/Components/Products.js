import React from "react";
import Logo from "../../Images/Common/lufc-logo-lg.png";


import '../Styles/_Products.scss';

const DEFAULT_CLASSNAME = "hero";

export default function Products(ProductsObject) {


    const ProductsResult = ProductsObject.Products;

    return(
        <div className="section-products">
        <div className="container">
        <div className="products__heading">
            <h3 className="section-headings">{ProductsResult !== undefined ? ProductsResult.product_header : ""}</h3>
        </div>

        <div className="products__items">
            <div className="products__items-1">
                <span className="title">{ProductsResult !== undefined ? ProductsResult.product_one_title : ""}</span>
                <span className="info">{ProductsResult !== undefined ? ProductsResult.product_one_info : ""}</span>
            </div>
            <div className="products__items-2">
                <span className="title">{ProductsResult !== undefined ? ProductsResult.product_two_title : ""}</span>
                <span className="info">{ProductsResult !== undefined ? ProductsResult.product_two_info : ""}</span>
            </div>
            <div className="products__items-3">
                <span className="title">{ProductsResult !== undefined ? ProductsResult.product_two_title : ""}</span>
                <span className="info">{ProductsResult !== undefined ? ProductsResult.product_two_info : ""}</span>
            </div>
        </div>
    </div>
    </div>
    );
}