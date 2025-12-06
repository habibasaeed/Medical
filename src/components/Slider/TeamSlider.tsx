import { team } from "../../data/team";
import type { TeamItem } from "../../data/team";
import type { Settings } from "../../data/team";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./TeamSlider.css";
function TeamSlider() {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {team.map((item: TeamItem, index: number) => (
          <div key={index} className="team-card">
            <div className="team-card-body text-center">
              <img src={item.img} />
              <h5 className="team-name">{item.name}</h5>
              <p className="team-position">{item.position}</p>
            </div>
            <div className="team-img">
              <img src={item.img} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default TeamSlider;
