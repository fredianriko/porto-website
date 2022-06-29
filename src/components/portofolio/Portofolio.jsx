import React, { useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portofolio.scss";
import { featuredPortfolio, webPortfolio,mobilePortfolio,designPortfolio,contentPortfolio } from "../../data";
import { useEffect } from "react";

export default function Portofolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([])
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
      id: "content",
      title: "Content",
    },
  ];

  //fetch dummy data
  useEffect(() => {
    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      case "design":
        setData(designPortfolio)
        break;
      case "content":
        setData(contentPortfolio)
        break;
      default:
        break;
    }
      
  
  },selected)

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
        {data.map((data) => {
          <div className="item active">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        })}

      </div>
    </div>
  );
}
