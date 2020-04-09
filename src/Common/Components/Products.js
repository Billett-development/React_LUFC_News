import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/_Products.scss';
import Image from "../../Images/Common/alex-img.jpg";


const DEFAULT_CLASSNAME = "products";



export default class Products extends React.Component {

    render(){
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

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

                <div className={`${DEFAULT_CLASSNAME}__items`}>
                    <img src={Image} alt="add alt here"/>
                    <span className="title">Product title</span>
                    <span className="info">info about the product</span>
                </div>

            </Slider>
        </div>
        </div>
    );
}
}

// export default function Products(ProductsObject) {

//     const ProductsResult = ProductsObject.Products;

//     return(
        // <div className="section-products">
        // <div className="container">

        // <div className={`${DEFAULT_CLASSNAME}__heading`}>
        //     <h3 className="section-headings">{ProductsResult !== undefined ? ProductsResult.product_header : ""}</h3>
        // </div>

//         <div className={`${DEFAULT_CLASSNAME}__items-1`}>
//         <span className="title">{ProductsResult !== undefined ? ProductsResult.product_one_title : ""}</span>
//         <span className="info">{ProductsResult !== undefined ? ProductsResult.product_one_info : ""}</span>
//         </div>
        
//         <div className={`${DEFAULT_CLASSNAME}__items-2`}>
//         <span className="title">{ProductsResult !== undefined ? ProductsResult.product_two_title : ""}</span>
//         <span className="info">{ProductsResult !== undefined ? ProductsResult.product_two_info : ""}</span>
//         </div>
        
//         <div className={`${DEFAULT_CLASSNAME}__items-3`}>
//         <span className="title">{ProductsResult !== undefined ? ProductsResult.product_two_title : ""}</span>
//         <span className="info">{ProductsResult !== undefined ? ProductsResult.product_two_info : ""}</span>
//         </div>


//     </div>
//     </div>
//     );
// }


// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", color: "red" }}
//         onClick={onClick}
//       />
//     );
//   }

//   function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", backgroundColor: "lightblue"}}
//         onClick={onClick}
//       />
//     );
//   }
