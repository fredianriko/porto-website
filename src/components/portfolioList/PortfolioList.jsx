import React from "react";
import "./portfoliolist.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li className={active ? "PortfolioList active" : "PortfolioList"} onClick={() => setSelected(id)}>
      {title}
    </li>
  );
}
