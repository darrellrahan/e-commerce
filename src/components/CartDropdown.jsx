import React from "react";
import { useGlobalContext } from "../context";

function CartDropdown() {
  const { setIsCart } = useGlobalContext();

  return (
    <div className="cart-dropdown">
      <div className="top">
        <h4 className="title">Cart</h4>
        <button onClick={() => setIsCart(false)}>
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#1d2025"
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
        </button>
      </div>
      <hr />
      <p className="empty-cart">Your cart is empty.</p>
    </div>
  );
}

export default CartDropdown;