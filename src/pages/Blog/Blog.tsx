import React from "react";
import "../../assets/css/style.css";
import BlogList from "../../components/BlogList/BlogList";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import "./Blog.css";
function Blog() {
  return (
    <>
      <BreadCrumbs page="Blog" title="Our Blog" />
      <section className="blog">
        <div className="blog-container text-center my-5">
          <div className="two-sides-title-wrapper">
            <h5 className="two-sides-title">OUR LATEST BLOG</h5>
          </div>
          <h4 className="">Latest Posts & Articles</h4>
        </div>
        <div className="container ">
          <div className="blogs">
            <BlogList />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
