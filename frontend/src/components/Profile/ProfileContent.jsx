import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";
import { useState } from "react";
import AllOrders from "../Profile/Orders/AllOrders";
import AllRefundOrders from "../Profile/Orders/AllRefundOrders";
import TrackOrder from "../Profile/Orders/TrackOrder";
import PaymentMethod from "../Profile/Orders/PaymentMethod";
import Address from "../Profile/Orders/Address";

const ProfileContent = ({ active }) => {
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phoneNumber, setPhoneNumber] = useState();
  const [zipCode, setZipCode] = useState();
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      {/* Profile page */}
      {active === 1 && (
        <>
          <div className="flex justify-center w-full">
            <div className="relative">
              <img
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-green-400"
                src={`${backend_url}${user?.avatar.url}`}
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] border-[2px] border-green-400 rounded-full flex items-center justify-center cursor-pointer absolute bottom-5 right-0">
                <AiOutlineCamera />
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="w-full px-5">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className="w-[100%] 800px:w-50%">
                  <label className="block pb-3">Full name</label>
                  <input
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    type="text"
                    name=""
                    id=""
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="ww-[100%] 800px:w-50%">
                  <label className="block pb-2">Email Address</label>
                  <input
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    type="text"
                    name=""
                    id=""
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block pb-3">
                <div className="w-[100%] 800px:w-50%">
                  <label className="block pb-3">Phone number</label>
                  <input
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    type="text"
                    name=""
                    id=""
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="w-[100%] 800px:w-50%">
                  <label className="block pb-2">Zip code</label>
                  <input
                    className={`${styles.input} !w-[95%]`}
                    type="text"
                    name=""
                    id=""
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full 800px:flex block pb-3">
                <div className="w-[100%] 800px:w-50%">
                  <label className="block pb-3">Address 1</label>
                  <input
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                    type="text"
                    name=""
                    id=""
                    required
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                  />
                </div>
                <div className="w-[100%] 800px:w-50%">
                  <label className="block pb-2">Address 2</label>
                  <input
                    className={`${styles.input} !w-[95%]`}
                    type="text"
                    name=""
                    id=""
                    required
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={`w-[250px] h-[40px] border border-[#3a24db] text-center text[#3a24db] rounded-[3px] mt-8 cursor-pointer`}
                type="submit"
                value="Update"
                required
              />
            </form>
          </div>
        </>
      )}

      {/* Order */}
      {active === 2 && (
        <div className="">
          <AllOrders />
        </div>
      )}
      {/* Refund */}
      {active === 3 && (
        <div className="">
          <AllRefundOrders />
        </div>
      )}
      {/* Track orders */}
      {active === 5 && (
        <div className="">
          <TrackOrder />
        </div>
      )}
      {/* Payment Methods */}
      {active === 6 && (
        <div className="">
          <PaymentMethod />
        </div>
      )}
      {/* User addresss */}
      {active === 7 && (
        <div className="">
          <Address />
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
