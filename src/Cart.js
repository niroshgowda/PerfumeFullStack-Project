import React from 'react'
import './Cart.css'

export default function Cart() {
  return (
	<>
  <link
    rel="icon"
    href="https://webdevtrick.com/wp-content/uploads/2019/02/webdevtrick-favicon-1.png"
    type="image/png"
    sizes="16x16"
  />
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Shopping Cart | Webdevtrick.com</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
  />
  <link
    rel="canonical"
    href="https://webdevtrick.com/responsive-shopping-cart-page/"
  />
  <link rel="stylesheet" href="style.css" />
  <h1>My Perfume Cart</h1>
  <div className="shopping-cart">
    <div className="column-labels">
      <label className="product-image">Image</label>
      <label className="product-details">Product</label>
      <label className="product-price">Price</label>
      <label className="product-quantity">Quantity</label>
      <label className="product-removal">Remove</label>
      <label className="product-line-price">Total</label>
    </div>
    <div className="product">
      <div className="product-image">
        <img src="https://i.pinimg.com/564x/47/46/31/474631951387008b9c18e739f467eba1.jpg" />
      </div>
      <div className="product-details">
        <div className="product-title">Yves Saint Laurent</div>
        <p className="product-description">
		  The unique scent of Y Saint Laurent Cologne combines a woody and earthy fragrance with key notes of bergamot, sage and ginger.
        </p>
      </div>
      <div className="product-price">1262.00</div>
      <div className="product-quantity">
        <input type="number" defaultValue={2} min={1} />
      </div>
      <div className="product-removal">
        <button className="remove-product">Remove</button>
      </div>
      <div className="product-line-price">2524.00</div>
    </div>
    
    <div className="totals">
      <div className="totals-item">
        <label>Subtotal</label>
        <div className="totals-value" id="cart-subtotal">
          3696.99
        </div>
      </div>
      <div className="totals-item">
        <label>Tax (5%)</label>
        <div className="totals-value" id="cart-tax">
          3.60
        </div>
      </div>
      <div className="totals-item">
        <label>Shipping</label>
        <div className="totals-value" id="cart-shipping">
          15.00
        </div>
      </div>
      <div className="totals-item totals-item-total">
        <label>Grand Total</label>
        <div className="totals-value" id="cart-total">
          4079.16
        </div>
      </div>
    </div>
    <button className="checkout">Checkout</button>
  </div>
  
</>

  )
}
