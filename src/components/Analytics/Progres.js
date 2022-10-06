import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import av from "../css/images/av.jpg";
const Progres = () => {
  const percentage = 77;
  return (
    <div>
      <div className="container-avatars">
        <div className="listAvatar">
          <CircularProgressbarWithChildren value={percentage} strokeWidth={7}>
            <img
              style={{ borderRadius: 999, width: 140, height: 140 }}
              src={av}
              alt="av"
            />
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
};

export default Progres;
