import React from "react";

const Detail = ({ icon, text, score }) => {
  const URLicon = `icon-${icon}.svg`;
  return (
    <div>
      <img src={URLicon} />
      <p>{text}</p>
      <p>
        <span>{score}</span> /100
      </p>
    </div>
  );
};

export default Detail;
