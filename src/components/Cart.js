import { CDN_URL } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-4 m-4 min-h-screen">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 ? (
          <p className="my-4">Your cart is empty. Add items to see them here!</p>
        ) : (
          <>
            {/* Clear Cart Button */}
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 mb-4"
            >
              Clear Cart
            </button>

            {/* Cart Items List */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 m-2 border-gray-200 border-b-2 text-left"
              >
                {/* Left Section: Item Details */}
                <div className="w-9/12">
                  <div className="py-2">
                    <span className="font-bold">{item.name}</span>
                    <span className="ml-2">
                      ₹{(item.price / 100 || item.defaultPrice / 100) * item.quantity}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{item.description}</p>
                  <div className="mt-2">
                    <span className="bg-gray-100 px-2 py-1 rounded text-sm">
                      Quantity: {item.quantity}
                    </span>
                  </div>
                </div>

                {/* Right Section: Item Image */}
                <div className="w-3/12 p-4">
                  {item.imageId && (
                    <img
                      src={CDN_URL + item.imageId}
                      alt={item.name}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            ))}

            {/* Total Price Section */}
            <div className="font-bold text-xl p-4 border-t-2">
              Total: ₹
              {cartItems
                .reduce(
                  (total, item) =>
                    total + (item.price / 100 || item.defaultPrice / 100) * item.quantity,
                  0
                )
                .toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;