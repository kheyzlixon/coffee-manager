import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, isLoading } = useSelector((state) => state.seller);
  useEffect(() => {
    if (isSeller) {
      navigate("/dashboard");
    }
  }, [isLoading, isSeller, navigate]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};

export default ShopLoginPage;
