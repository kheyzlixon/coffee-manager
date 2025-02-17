import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};

export const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("productCreateRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("productCreateSuccess", (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.success = true;
    })
    .addCase("productCreateFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    })

    // get all products of a shop

    .addCase("getAllProductsShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("getAllProductsShopSuccess", (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    })
    .addCase("getAllProductsShopFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase("clearSuccess", (state) => {
      state.success = false;
    })

    .addCase("clearErrors", (state) => {
      state.error = null;
    })

    //  Delete product of a shop
    .addCase("deleteProductShopRequest", (state) => {
      state.isLoading = true;
    })
    .addCase("deleteProductShopSuccess", (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    })
    .addCase("deleteProductShoFail", (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
});
