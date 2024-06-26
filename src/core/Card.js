// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import ShowImage from "./ShowImage";
// import moment from "moment";
// import { addItem, updateItem, removeItem } from "./cartHelpers";

// const Card = ({
//     product,
//     showViewProductButton = true,
//     showAddToCartButton = true,
//     cartUpdate = false,
//     showRemoveProductButton = false
// }) => {
//     const [redirect, setRedirect] = useState(false);
//     const [count, setCount] = useState(product.count);

//     const showViewButton = showViewProductButton => {
//         return (
//             showViewProductButton && (
//                 <Link to={`/product/${product._id}`} className="mr-2">
//                     <button className="btn btn-outline-primary mt-2 mb-2">
//                         View Product
//                     </button>
//                 </Link>
//             )
//         );
//     };

//     const addToCart = () => {
//         addItem(product, () => {
//             setRedirect(true);
//         });
//     };

//     const shouldRedirect = redirect => {
//         if (redirect) {
//             return <Redirect to="/cart" />;
//         }
//     };

//     const showAddToCart = showAddToCartButton => {
//         return (
//             showAddToCartButton && (
//                 <button
//                     onClick={addToCart}
//                     className="btn btn-outline-warning mt-2 m-2"
//                 >
//                     Add to cart
//                 </button>
//             )
//         );
//     };

//     const showRemoveButton = showRemoveProductButton => {
//         return (
//             showRemoveProductButton && (
//                 <button
//                     onClick={() => removeItem(product._id)}
//                     className="btn btn-outline-danger mt-2 mb-2"
//                 >
//                     Remove Product
//                 </button>
//             )
//         );
//     };

//     const showStock = quantity => {
//         return quantity > 0 ? (
//             <span className="badge text-bg-primary ">In Stock</span>
//         ) : (
//             <span className="badge text-bg-danger ">Out of Stock</span>
//         );
//     };

//     const handleChange = productId => event => {
//         setCount(event.target.value < 1 ? 1 : event.target.value);
//         if (event.target.value >= 1) {
//             updateItem(productId, event.target.value);
//         }
//     };

//     const showCartUpdateOptions = cartUpdate => {
//         return (
//             cartUpdate && (
//                 <div>
//                     <div className="input-group mb-3">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 Adjust Quantity
//                             </span>
//                         </div>
//                         <input
//                             type="number"
//                             className="form-control"
//                             value={count}
//                             onChange={handleChange(product._id)}
//                         />
//                     </div>
//                 </div>
//             )
//         );
//     };

//     return (
//         <div className="card">
//             <div className="card-header">{product.name}</div>
//             <div className="card-body">
//                 {shouldRedirect(redirect)}
//                 <ShowImage item={product} url="product" />
//                 <p className="lead mt-2">
//                     {product.description.substring(0, 100)}
//                 </p>
//                 <p className="black-10">${product.price}</p>
//                 <p className="black-9">
//                     Category: {product.category && product.category.name}
//                 </p>
//                 <p className="black-8">
//                     Added on {moment(product.createdAt).fromNow()}
//                 </p>

//                 {showStock(product.quantity)}
//                 <br />

//                 {showViewButton(showViewProductButton)}

//                 {showAddToCart(showAddToCartButton)}

//                 {showRemoveButton(showRemoveProductButton)}

//                 {showCartUpdateOptions(cartUpdate)}
//             </div>
//         </div>
//     );
// };

// export default Card;
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import { addItem, updateItem, removeItem } from "./cartHelpers";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';
import ShowImage from "./ShowImage";

const Card = ({
    product,
    showViewProductButton = true,
    showAddToCartButton = true,
    cartUpdate = false,
    showRemoveProductButton = false
}) => {
    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const showViewButton = showViewProductButton => {
        return (
            showViewProductButton && (
                <Link to={`/product/${product._id}`} className="btn btn-primary btn-sm mr-2">
                    View Product
                </Link>
            )
        );
    };

    const addToCart = () => {
        addItem(product, () => {
            setRedirect(true);
        });
    };

    const shouldRedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const showAddToCart = showAddToCartButton => {
        return (
            showAddToCartButton && (
                <button
                    onClick={addToCart}
                    className="btn btn-warning btn-sm"
                >
                    Add to Cart
                </button>
            )
        );
    };

    const showRemoveButton = showRemoveProductButton => {
        return (
            showRemoveProductButton && (
                <button
                    onClick={() => removeItem(product._id)}
                    className="btn btn-danger btn-sm"
                >
                    Remove Product
                </button>
            )
        );
    };

    const showStock = quantity => {
        return quantity > 0 ? (
            <span className="badge badge-success">In Stock</span>
        ) : (
            <span className="badge badge-danger">Out of Stock</span>
        );
    };

    const handleChange = productId => event => {
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                Adjust Quantity
                            </span>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            value={count}
                            onChange={handleChange(product._id)}
                        />
                    </div>
                </div>
            )
        );
    };

    return (
        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <ShowImage item={product} url="product"/>
                 
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                {shouldRedirect(redirect)}
                <MDBCardTitle>{product.name}</MDBCardTitle>
                <MDBCardText>{product.description.substring(0, 100)}</MDBCardText>
                <p className="black-10">${product.price}</p>
                <p className="black-9">
                    Category: {product.category && product.category.name}
                </p>
                <p className="black-8">
                    Added on {moment(product.createdAt).fromNow()}
                </p>
                {showStock(product.quantity)}
                <br />
                <div className="btn-group" role="group" aria-label="Product Actions">
                    {showViewButton(showViewProductButton)}
                    {showAddToCart(showAddToCartButton)}
                    {showRemoveButton(showRemoveProductButton)}
                </div>
                {showCartUpdateOptions(cartUpdate)}
            </MDBCardBody>
        </MDBCard>
    );
};

export default Card;
