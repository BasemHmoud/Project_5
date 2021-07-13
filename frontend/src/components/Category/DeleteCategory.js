import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
const DeleteCategory = () => {
  const [category_id, setCategory_id] = useState(0);
  const state = useSelector((state) => {
    // specify which state to subscribe to (state tree => reducer => state name )
    return {
      token: state.login.token,
    };
  });
  const DeleteCategories = () => {
    axios
      .delete(`http://localhost:5000/category/${category_id}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="deleteCategory">
      <h1 style={{ color: "#a24e12", marginLeft: "32rem", marginTop: "2rem" }}>
        Delete Category
      </h1>
      <table className='tableDeleteCategory' >
      <tr><th>Category Id</th>
      <th>
      <input
        type="Number"
        placeholder="Category_id here "
        onChange={(e) => {
          setCategory_id(e.target.value);
        }}
      /></th></tr>
      <tr><th></th>
      <th>
      <button className=" DeleteCategoryButton" onClick={DeleteCategories}>
        Delete Category
      </button></th></tr></table>
    </div>
  );
};

export default DeleteCategory;
