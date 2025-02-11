import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layouts/Loader";
import PropTypes from "prop-types";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  if (isLoading === true) {
    return <Loader />;
  } else {
    if (!isSeller) {
      return <Navigate to="/shop-login" replace />;
    }
    return children;
  }
};

SellerProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SellerProtectedRoute;
