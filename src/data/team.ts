import img1 from "../assets/images/team_1.jpg";
import img2 from "../assets/images/team_2.jpg";
import img3 from "../assets/images/team_3.jpg";
import img4 from "../assets/images/team_5.jpg";
import img5 from "../assets/images/team_14.jpg";

export interface TeamItem {
  img: string;
  name: string;
  position: string;
}
export interface Settings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  responsive?: {
    breakpoint: number;
    settings: {
      slidesToShow: number;
    };
  }[];
}

export const team: TeamItem[] = [
  {
    img: img1,
    name: "Dr. Johnson William",
    position: "Orthopedic Surgeon",
  },
  {
    img: img2,
    name: "Dr. Michael Smith",
    position: "Neurologist",
  },
  {
    img: img3,
    name: "Dr. Jack Davis ",
    position: "Pediatrician",
  },
  {
    img: img4,
    name: "Dr. David Wilson",
    position: "Dermatologist",
  },
  {
    img: img5,
    name: "Dr. Olivia Brown",
    position: "Dentist",
  },
];
