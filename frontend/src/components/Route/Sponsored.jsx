import styles from "../../styles/styles";
import Menya from "../../assets/Menya.png";
import Murambi from "../../assets/Murambi.png";
import bujaCafe from "../../assets/bujaCafe.png";
import dhl from "../../assets/dhl.png";
import nesle from "../../assets/nesle.png";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            className=""
            src={Murambi}
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            className=""
            src={Menya}
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            className=""
            src={bujaCafe}
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            className=""
            src={dhl}
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            className=""
            src={nesle}
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
