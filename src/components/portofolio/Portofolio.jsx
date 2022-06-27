import React, { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portofolio.scss";

export default function Portofolio() {
  const [selected, setSelected] = useState("featured");
  //create enum of list
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  return (
    <div className="portofolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {/* iterate over the list and passed the title */}
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>

      <div className="container">
        <div className="item active">
          <img src="assets/banking.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/banking.jpg" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}