import { useState } from "react";
import arabicaBean from "../../assets/arabicaBean.jpeg";
import { RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";

const wishListSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;

  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor pointer" />

        <img src={arabicaBean} alt="" className="w-[80px] h-[80px] ml-2" />
        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[400] text-[15px] text-[#00000082]">
            ${totalPrice}
          </h4>
        </div>
        <BsCartPlus size={20} className="cursor-pointer" title="Add to cart" />
      </div>
    </div>
  );
};

export default wishListSingle;
