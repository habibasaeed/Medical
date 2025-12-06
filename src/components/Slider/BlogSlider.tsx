import { blogData } from "../../data/blogData";
import type { BlogItem } from "../../data/blogData";
import type { Settings } from "../../data/blogData";
import "./BlogSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BlogSlider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
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
      </Slider>
    </>
  );
}

export default BlogSlider;
