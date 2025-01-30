import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({ items = [] }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    // Get item quantity in the cart
    const getItemQuantity = (itemId) => {
        const item = cartItems.find(cartItem => cartItem.id === itemId);
        return item ? item.quantity : 0;
    };

    return (
        <div>
            {items.map((item) => {
                if (!item || !item.card || !item.card.info) {
                    return null;  // Skip if missing data
                }

                const quantity = getItemQuantity(item.card.info.id);

                return (
                    <div key={item.card.info.id} className="flex justify-between items-center p-4 m-2 border-gray-200 border-b-2 text-left shadow">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-bold">{item.card.info.name}</span>
                                <span> - ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                            </div>
                            <p className="text-sm">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="flex items-center space-x-2">
                                <button 
                                    className="bg-white text-green-600 font-bold border border-gray-300 px-3 rounded-lg hover:bg-green-600 hover:text-white" 
                                    onClick={() => dispatch(removeItems(item.card.info))}>
                                    -
                                </button>
                                <span className="px-2">{quantity}</span>
                                <button 
                                    className="bg-white text-green-600 font-bold border border-gray-300 px-3 rounded-lg hover:bg-green-600 hover:text-white" 
                                    onClick={() => dispatch(addItems(item.card.info))}>
                                    +
                                </button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full" alt={item.card.info.name} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
