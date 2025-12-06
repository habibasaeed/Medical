import React from "react";
import "../assets/css/style.css";
interface PortfolioProps {
  title: string;
  number: string | number;
  children?: React.ReactNode;
}
const Portfolio: React.FC<PortfolioProps> = ({ title, number, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <>
      <div
        className="portfolio-card-title"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="white-space"></div>
        <div
          className="portfolio-card-title-content"
          style={{
            backgroundColor: isHovered ? "var(--dark)" : "var(--bg)",
            color: isHovered ? "white" : "var(--text-dark)",
          }}
        >
          <h4 style={{ color: isHovered ? "var(--bg)" : "var(--dark)" }}>
            {title}
          </h4>
          {children}
        </div>
        <div
          className="card-number"
          style={{ backgroundColor: isHovered ? "var(--brand)" : "var(--dark" }}
        >
          <h2>{number}</h2>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
