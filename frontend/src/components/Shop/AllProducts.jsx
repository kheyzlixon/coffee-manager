import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductShop,
  getAllProductsShop,
} from "../../redux/actions/product";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import Loader from "../Layouts/Loader";
import { DataGrid } from "@mui/x-data-grid";

const AllProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    if (seller?._id) {
      dispatch(getAllProductsShop(seller._id));
    }
  }, [dispatch, seller]);

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductShop(id));
    window.location.reload();
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 0.5,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "Sold",
      headerName: "Sold Out",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: "Preview",
      headerName: "",
      minWidth: 100,
      flex: 0.5,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        const d = params.row.name;
        const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${product_name}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
    {
      field: "Delete",
      headerName: "",
      minWidth: 120,
      flex: 0.5,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => handleDeleteProduct(params.id)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  products &&
    products.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: item.discountPrice + "$",
        stock: item.stock,
        Sold: 10,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
          <div className="w-full m-10 bg-white shadow  rounded-[4px] p-3 overflow-y-scroll">
            <DataGrid
              rows={row}
              columns={columns}
              pageSize={10}
              disableRowSelectionOnClick
              autoHeight
            />
          </div>
      )}
    </>
  );
};

export default AllProducts;
