import axios from "axios";
import { server } from "../../server";

// create product
export const createProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "productCreateRequest",
    });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${server}/product/create-product`,
      newForm,
      config
    );
    dispatch({
      type: "productCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "productCreateFail",
      payload: error.response.data.message,
    });
  }
};

// get all products of a shop

export const getAllProductsShop = (shopId) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllProductsShopRequest",
    });
    const { data } = await axios.get(
      `${server}/product/get-all-products/${shopId}`
    );
    dispatch({
      type: "getAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "getAllProductsShopFail",
      payload: error.response.data.message,
    });
  }
};

// delete product of a shop
export const deleteProductShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteProductShopRequest",
    });
    const { data } = await axios.delete(
      `${server}/product/delete-shop-product/${id}`,
      { withCredentials: true }
    );
    dispatch({
      type: "deleteProductShopSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteProductShopFail",
      payload: error.response.data.message,
    });
  }
};
