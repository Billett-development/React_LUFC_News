import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/_Products.scss';
import Image from "../../Images/Common/alex-img.jpg";


const DEFAULT_CLASSNAME = "products";



export default class Products extends React.Component {

    render(){

        let productsData = this.props.Products;
        console.log(productsData)

        if (productsData !== undefined) {
            const productItem = productsData.products.map(
              (product) => (
                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <a href={product.product_link}>
                        <img src={product.product_image.url} alt="add alt here"/>
                        <span className="title">{product.product_title}</span>
                        <div className="purchasing">
                            <p>£{product.product_price}</p>
                            <div href={product.product_link}>View</div>
                        </div>
                    </a>
                </div>
              )
            );

        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
    }
    return (
        <div className="section-products">
        <div className="container">
        
            <div className={`${DEFAULT_CLASSNAME}__heading`}>
                <h3 className="section-headings">Best selling products</h3>
            </div>
            <Slider {...settings} className={DEFAULT_CLASSNAME}>
                {productItem}
            </Slider>
        </div>
        </div>
                );
            }
        return null;
    }
}
