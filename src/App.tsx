import { useState } from "react";
import CartItems from "./components/CartItems/CartItems";
import Navbar from "./components/CartItems/Navbar";
import Button from "./components/Button";

const App = () => {
  const [cartItems, setItems] = useState([
    "Cricket Balls",
    "Sports Wear",
    "Football",
    "Shoes",
    "T-Shirt",
    "Trousers",
  ]);
  const handleClick = () => {
    setItems([]);
  };

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <CartItems
        onRemove={(index1) =>
          setItems(cartItems.filter((_, index) => index !== index1))
        }
        heading="Sports Category"
        cartItems={cartItems}
      />
      <Button
        cartItemCount={cartItems.length > 0 ? true : false}
        title="Clear All"
        color="primary"
        onClick={handleClick}
      />
    </div>
  );
};

export default App;
