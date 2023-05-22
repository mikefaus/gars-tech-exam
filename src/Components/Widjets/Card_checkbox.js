import React, { useState } from "react";
import * as IoIcons from "react-icons/io";

const Card_checkbox = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleToggleAll = () => {
    if (selectedItems.length > 0) {
      // If all items are selected, deselect all
      setSelectedItems([]);
    } else {
      // Select all items
      setSelectedItems([...props.data]);
    }
  };

  const handleToggleItem = (item) => {
    if (selectedItems.includes(item)) {
      // Deselect the item
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      // Select the item
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className="card">
      <div className="card_title">
        {props.title}
        <IoIcons.IoIosHelpCircleOutline />
      </div>
      <div className="card_subtitle">At least one selection must be made</div>
      <div className="card_body">
        {props.data.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleToggleItem(item)}
                // name={props.title}
              />
              {item}
            </label>
          </li>
        ))}
      </div>
      <div className="card_foot">
        <button className="button_card" onClick={handleToggleAll}>
          {selectedItems.length > 0 ? "Clear" : "Select All"}
        </button>
      </div>
    </div>
  );
};

export default Card_checkbox;
