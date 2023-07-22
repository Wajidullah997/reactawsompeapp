import React from "react";
import Images from "./images";
import Heading from "./Heading";
 
function Card(props) {
  return (
      <>
          <div className="Cards">
        <div className="Card">
          <Images imgsrc={props.imgsrc} />
                   <div className="card_info">
            <span className="card_category">{props.title}</span>
            <Heading sname= {props.sname} />
                      <h3 className="card_title"> { props.sname}</h3>
                      <a href={ props.link } target="">
                          <button > watch now </button>
                      </a>
                  </div>
              </div>
          </div>
      </>
  );
};
export default Card;