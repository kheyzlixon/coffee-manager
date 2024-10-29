import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className={
              "text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            }
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
            placerat lectus, eget hendrerit dolor. Etiam risus nibh, fermentum a
            fringilla et, eleifend quis risus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Sed leo risus, vestibulum at mauris
            id, porta sodales nunc. Praesent vitae rhoncus orci. Mauris eget
            turpis eleifend, congue arcu non, dictum felis. Praesent dignissim
            condimentum varius. Nam condimentum ligula quis ligula eleifend, a
            pretium risus maximus. Aenean rhoncus fringilla tincidunt. Cras
            vestibulum sit amet odio in viverra.
          </p>
          <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
            placerat lectus, eget hendrerit dolor. Etiam risus nibh, fermentum a
            fringilla et, eleifend quis risus. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Sed leo risus, vestibulum at mauris
            id, porta sodales nunc. Praesent vitae rhoncus orci. Mauris eget
            turpis eleifend, congue arcu non, dictum felis. Praesent dignissim
            condimentum varius. Nam condimentum ligula quis ligula eleifend, a
            pretium risus maximus. Aenean rhoncus fringilla tincidunt. Cras
            vestibulum sit amet odio in viverra.
          </p>
        </>
      ) : null}

      {active === 2 ? (
        <div className="w-full justify-center min-h-[40vh] flex items-center">
          <p>No reviews yet !</p>
        </div>
      ) : null}

      {active === 3 ? (
        <div className="w-full block 800px:flex p-5">
          <div className="w-full 800px:w-[50%]">
            <div className="flex items-center">
              <img
                src={data.shop.shop_avatar.url}
                className="w-[50px] h-[50px] rounded-full"
                alt=""
              />

              <div className="pl-3">
                <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                <h5 className="pb-2">({data.shop.ratings}) Ratings</h5>
              </div>
            </div>
            <p className="pt-2">
              Cras pellentesque mollis enim eget gravida. Aliquam eros lectus,
              ornare id ipsum rutrum, molestie porta nibh. Curabitur vestibulum
              arcu mauris, eget eleifend mi placerat vel. Vivamus vel ligula
              quam. Donec semper leo vel nibh scelerisque tristique. Mauris
              mattis iaculis elit ac finibus. Nam finibus arcu in orci
              vestibulum, id consectetur purus suscipit. Nunc vel odio vel justo
              faucibus tempus quis eu eros. Cras tempor arcu turpis, ut
              condimentum velit scelerisque pellentesque. Vivamus convallis elit
              vel lorem consequat consectetur.
            </p>
          </div>
          <div className="w-full 800px:[50%] mt-5 800px:flex flex-col items-end">
            <div className="text-left">
              <h5 className="font-[600]">
                Joined on: <span className="font-[500]">14 March, 2023</span>
              </h5>
              <h5 className="font-[600]">
                Total products: <span className="font-[500]">1 223</span>
              </h5>
              <h5 className="font-[600]">
                Total reviews: <span className="font-[500]">324</span>
              </h5>
              <Link to="/">
                <div
                  className={`${styles.button} rounded-[4px] h-[39.5px] mt-3`}
                >
                  <div className="text-white">Visit Shop</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsInfo;
