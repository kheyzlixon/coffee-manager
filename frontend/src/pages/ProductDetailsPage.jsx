import { useParams } from "react-router-dom";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";
import ProductDetails from "../components/Products/ProductDetails";
import { productData } from "../static/data";
import { useEffect, useState } from "react";
import SuggestedProduct from "../components/Products/SuggestedProduct.jsx";

const ProductDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/~/g, " ");

  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, [productName]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
