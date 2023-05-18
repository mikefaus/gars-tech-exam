import React from "react";
import * as IoIcons from "react-icons/io";

const Card_radio_3 = (props) => {
  return (
    <div className="card">
      <div className="card_title">
        {props.title}
        <IoIcons.IoIosHelpCircleOutline onClick={console.log("help")} />
      </div>
      <div className="card_body_3">
        <div className="radio_select">
          <input type="radio" name="Graphic Area"/>
          <div className="radio_card_1">
            <div className="radio_card_title">Whole available region</div>
            <div className="radio_card_content">
              With this option selected the entire available area will be
              provided
            </div>
          </div>
        </div>

        <div className="radio_select">
          <input type="radio" name="Graphic Area"/>
          <div className="radio_card_2">
            <div className="radio_card_title">Sub-region extraction</div>
            <div className="radio_card_content">
              <div className="vertical_coordinates">
                <div className="orientation">
                  North
                  <input type="text" id="North" placeholder="90"/>
                </div>
              </div>

              <div className="horizontal_coordinates">
                <div className="orientation">
                  West
                  <input type="text" id="West" placeholder="-100"/>
                </div>
                <div className="orientation">
                  East
                  <input type="text" id="East" placeholder="100"/>
                </div>
              </div>
              <div className="vertical_coordinates">
                <div className="orientation">
                  South
                  <input type="text" id="South" placeholder="-90"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card_radio_3;
