import React, { useState } from "react";
import axios from "axios";
import "./bookPage.css";
export default function Category() {
  const [data, setData] = useState([]);
  const categories = (x) => {
    axios
      .get(`http://localhost:5000/book/Category/${x}`)
      .then((result) => {
        // console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  console.log(data);
  return (
    <>
      <div>
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-31.png"
          onClick={() => {
            categories(1);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-61.png"
          onClick={() => {
            categories(2);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-71.png"
          onClick={() => {
            categories(3);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-41.png"
          onClick={() => {
            categories(4);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/11.png"
          onClick={() => {
            categories(5);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-91.png"
          onClick={() => {
            categories(6);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/1-12.png"
          onClick={() => {
            categories(7);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/%D8%B3%D8%A7%D8%AE%D8%B1.png"
          onClick={() => {
            categories(8);
          }}alt=''
        />
        <img
          src="https://www.ktaab.com/wp-content/uploads/2015/04/deen.png"
          onClick={() => {
            categories(9);
          }}alt=''
        />
      </div>
      {data.map((elem, index) => {
        return (
          <div key={index} book_id={elem.book_id} className="book">
            <img
              className="book_image"
              src={elem.book_img}
              alt="غلاف الكتاب"
              style={{ height: "20rem", width: "100%" }}
            />
            <hr />
            <p className="book_element">العنوان: {elem.title}</p>
            <p className="book_element">المؤلف: {elem.author}</p>
            <p className="book_element">السعر: {elem.price}</p>
            {/* <ReactStars
              count={5}
              onClick={ratingChanged}
              size={24}
              activeColor="#FFD700"
              isHalf={true}
            /> */}
          </div>
        );
      })}
    </>
  );
}
