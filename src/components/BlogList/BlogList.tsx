import React from "react";
import { blogData } from "../../data/blogData";
import type { BlogItem } from "../../data/blogData";
import "../../assets/css/style.css";
function BlogList() {
  return (
    <>
      {blogData.map((item: BlogItem, index: number) => (
        <div key={index} className="card">
          <div className="slider-image">
            <img src={item.image} alt={item.alt} />
          </div>
          <div className="card-body">
            <div className="card-head">
              <i className="fa-solid fa-user-tie"></i>
              By admin <i className="fa-solid fa-comment comment-icon"></i>
              Comment
            </div>{" "}
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogList;
