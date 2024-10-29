import { AiOutlineDelete } from "react-icons/ai";
import styles from "../../../styles/styles";

const Address = () => {
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
          <h5 className="pl-5 font-[600]">Default</h5>
        </div>
        <div className="pl-8 flex items center">
          <h6>117 Rue de Condé, 59000 Lille</h6>
        </div>
        <div className="pl-8 flex items center">
          <h6>+33 6 82 61 25 82</h6>
        </div>
        <div className="min-w-[10%] flex items-center justify-between pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Address;
