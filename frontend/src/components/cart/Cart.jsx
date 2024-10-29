import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import CartSingle from "../cart/CartSingle.jsx";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Cart = ({ setOpenCart }) => {
  const cartData = [
    {
      name: "Arabica coffee from Burundi",
      description: "test",
      price: 999,
    },
    {
      name: "Robusta cofee from Burundi",
      description: "test",
      price: 245,
    },
    {
      name: "Honey coffee from Murambi coffee",
      description: "test",
      price: 645,
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm h-[60vh] overflow-y-auto">
        <div className="">
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenCart(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.normalFlex} p-4`}>
            <IoBagHandleOutline size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* Cart single items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        <div className="px-5 mb-3">
          {/* Checkout buttons */}
          <Link to="/checkout">
            <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]">
              <h1 className="bg-red-600 text-[#fff] text-[18px] font-[600]">
                Checkout Now (USD$1000)
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Validation des props

Cart.propTypes = {
  setOpenCart: PropTypes.number.isRequired,
};

export default Cart;
