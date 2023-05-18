import React from "react";
import * as IoIcons from 'react-icons/io';


const Card_checkbox = (props) => {
  return (
    <div className="card">
      <div className="card_title">
        {props.title}
        <IoIcons.IoIosHelpCircleOutline onClick={console.log("help")}/>
      </div>
      <div className="card_subtitle">At least one selection must be made</div>
      <div className="card_body">
        {props.data.map((num) => (
          <div key={num}>
            <input type="checkbox" id={num} value={num} onChange={""} />
            <label htmlFor={num}>{num}</label>
          </div>
        ))} 
      </div>
      <div className="card_foot">
      <button
          className='button_card'
          onClick={""}
        >
          Select all
        </button>
        </div> 
    </div>
  );
};

export default Card_checkbox;
