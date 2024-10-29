import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline, IoHeart } from "react-icons/io5";
import WishListSingle from "./WishListSingle.jsx";
import { AiOutlineHeart } from "react-icons/ai";

const WishList = ({ setOpenWishList }) => {
  const wishListData = [
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver color",
      description: "test",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver color",
      description: "test",
      price: 245,
    },
    {
      name: "Iphone 14 pro max 256 gb ssd and 8gb ram sliver color",
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
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.normalFlex} p-4`}>
            <IoHeart size={25} color="red" />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>

          {/* WishList single items */}
          <br />
          <div className="w-full border-t">
            {wishListData &&
              wishListData.map((i, index) => (
                <WishListSingle key={index} data={i} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
