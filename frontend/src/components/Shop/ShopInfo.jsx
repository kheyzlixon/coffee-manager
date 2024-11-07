import { backend_url } from "../../server";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
const ShopInfo = ({ isOwner }) => {
  const { seller } = useSelector((state) => state.seller);

  const handleLogout = () => {

  };

  return (
    <div>
      <div className="w-full py-5">
        <div className="w-full flex items-center justify-center">
          <img
            className="w-[150px] h-[150px] rounded-full object-cover"
            src={`${backend_url}${seller?.avatar.url}`}
            alt=""
          />
        </div>
        <h3 className="text-center text-slate-900 py-2 text-[20px]">
          {seller.name}
        </h3>
        <p className="text-[16px] text-slate-900 p-[10px] flex items-center">
          {seller.description}
        </p>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Address</h5>
        <h4 className="text-slate-900">{seller.address}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Phone Number</h5>
        <h4 className="text-slate-900">{seller.phoneNumber}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Total products</h5>
        <h4 className="text-slate-900">10</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Shop Ratings</h5>
        <h4 className="text-slate-900">4/5</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Joined On</h5>
        <h4 className="text-slate-900">{seller.createdAt.slice(0, 10)}</h4>
      </div>
      {isOwner && (
        <div className="py-3 px-4">
          <div className={`${styles.button} w-full h-[42px] !rounded-[5px]`}>
            <span className="text-white">Edit Shop</span>
          </div>
          <div className={`${styles.button} w-full h-[42px] !rounded-[5px]`} onClick={handleLogout}>
            <span className="text-white">Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopInfo;
