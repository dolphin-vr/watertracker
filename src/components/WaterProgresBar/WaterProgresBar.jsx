import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";

export const WaterProgresBar = () => {
  const quantity = 50;

  return (
    <div
      className="progress-container"
      style={{
        width: "360px",
        height: "8px",
        backgroundColor: "#D7E3FF",
        position: "relative",
      }}
    >
      <div
        className="progress-bar"
        id="myProgressBar"
        style={{
          width: `${quantity}%`,
          height: "100%",
          backgroundColor: "#9EBBFF",
          position: "absolute",
        }}
      ></div>
    </div>
  );
};
