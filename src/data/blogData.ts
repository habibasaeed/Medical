import img1 from "../assets/images/slider-1.jpeg";
import img2 from "../assets/images/slider-2.jpg";
import img3 from "../assets/images/post_3.jpg";
import img4 from "../assets/images/post_5.jpeg";
import img5 from "../assets/images/post_6.jpeg";
import img6 from "../assets/images/post_4.jpeg";
export interface BlogItem {
  image: string;
  title: string;
  desc: string;
  alt: string;
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
export const blogData: BlogItem[] = [
  {
    image: img1,
    title: "Medical of this working health blog",
    desc: "It is a long established fact that a reader will be distracted...",
    alt: "Medical of this working health blog",
  },
  {
    image: img2,
    title: "There is only one thing that is hospital",
    desc: "It is a long established fact that a reader will be distracted...",
    alt: "There is only one thing that is hospital",
  },
  {
    image: img3,
    title: "This working for infection prevention",
    desc: "It is a long established fact that a reader will be distracted...",
    alt: "This working for infection prevention",
  },
  {
    image: img5,
    title: "Medical of this working health blog",
    desc: "It is a long established fact that a reader will be distracted...",
    alt: "Medical of this working health blog",
  },
  {
    image: img4,
    title: "The Future of AI in Medicine",
    desc: "Explore the possibilities of AI in revolutionizing healthcare",
    alt: "Medical of this working health blog",
  },
  {
    image: img6,
    title: "10 Tips for a Healthier Lifestyle",
    desc: "Explore the possibilities of AI in revolutionizing healthcare",
    alt: "Medical of this working health blog",
  },
];
