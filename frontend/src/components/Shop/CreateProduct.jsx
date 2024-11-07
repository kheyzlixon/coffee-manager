import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  return (
    <div className="w-[90%] 800px:w-[50%] bg-white shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll">
      <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
      {/* create product form */}
      <form onSubmit={handleSubmit}>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your product Name ..."
          />
        </div>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="description"
            value={description}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your product Description ..."
          />
        </div>
        <br />
        <div>
          <label className="pb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            className="w-full mt-2 border h-[35px] rounded-[5px]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Choose category">Choose category</option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Tags <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter your product Tags ..."
          />
        </div>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Original Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="originalPrice"
            value={originalPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
            onChange={(e) => setOriginalPrice(e.target.value)}
            placeholder="Enter your product price ..."
          />
        </div>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Discount Price <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="discountPrice"
            value={discountPrice}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
            onChange={(e) => setDiscountPrice(e.target.value)}
            placeholder="Enter Discount Price ..."
          />
        </div>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Product Stock <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="stock"
            value={stock}
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
            onChange={(e) => setStock(e.target.value)}
            placeholder="Enter your products stock ..."
          />
        </div>
        <br />
        <div>
          <label htmlFor="" className="pb-2">
            Upload Images <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            className="hidden"
            multiple
            onChange={handleImageChange}
          />
          <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>
            {images &&
              images.map((i) => (
                <img
                  className="h-[120px] w-[120px] object-cover m-2"
                  src={URL.createObjectURL(i)}
                  key={i}
                  alt=""
                />
              ))}
          </div>
        </div>
        <br />
        <div>
          <input
            type="submit"
            value="create"
            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
