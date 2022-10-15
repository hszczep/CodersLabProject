import React, { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import "./Card-Scss/Card.css";
import StarIcon from "@mui/icons-material/Star";

function RenderCard({ average, setAnimation }) {
  //console.log(average);
  return (
    <motion.div
      className="CardContainer"
      layoutId="expandableCard"
      onClick={setAnimation}
      style={{ height: "20%", width: "20%" }}
    >
      <CircularProgressbarWithChildren
        value={average*20}
        text={`${average}`}
        styles={buildStyles({
          textColor: "#585858",
          pathColor: "#f2f2f2",
          trailColor: "#BEBEBE",
        })}
      />
    </motion.div>
  );
}

function AnimationCard({ average, listStars, setAnimation }) {
  return (
    <motion.div className="CardContainer" layoutId="expandableCard">
      <SecondCardIcon>
        <CloseIcon onClick={setAnimation} style={{ cursor: "pointer" }} />
      </SecondCardIcon>
      <SecondCardTitle>Amount of Stairs</SecondCardTitle>
      {[...Array(5)].map((s, i) => {
        return (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            {[...Array(i + 1)].map((ss, ii) => {
              return (
                <span key={ii}>
                  <StarIcon style={{ stroke: "black", fill: "gold" }} />
                </span>
              );
            })}
            :{listStars[i + 1]}
          </div>
        );
      })}
    </motion.div>
  );
}

const Card = ({ average, listStars }) => {
  const [animation, setAnimation] = useState(false);
  console.log(average);
  return (
    <AnimateSharedLayout>
      {animation ? (
        <AnimationCard
          average={average}
          listStars={listStars}
          setAnimation={() => setAnimation(false)}
        />
      ) : (
        <RenderCard average={average} setAnimation={() => setAnimation(true)} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;

const SecondCardIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const SecondCardTitle = styled.h4`
  padding: 10px;
  text-align: center;
`;
