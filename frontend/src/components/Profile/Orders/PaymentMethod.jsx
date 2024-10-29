import styles from "../../../styles/styles";
import Visadebitcard from "../../../assets/Visadebitcard.png";
import { AiOutlineDelete } from "react-icons/ai";

const PaymentMethod = () => {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-[25px] font-[600] text-slate-950 pb-2">
          Payment Methods
        </h1>
        <div className={`${styles.button}`}>
          <span className="text-white">Add New</span>
        </div>
      </div>
      <br />
      <div className="w-full bg-white h-[70px] rounded-md flex items-center px-3 shadow justify-between pr-10">
        <div className="flex items-center">
          <img src={Visadebitcard} className="w-10 h-8 object-contain" alt="" />
          <h5 className="pl-5 font-[600]">Khélia NIBARUTA</h5>
        </div>
        <div className="pl-8 flex items center">
          <h6>1234 **** *** ****</h6>
          <h5 className="pl-6">12/2025</h5>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
