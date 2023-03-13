import React from "react";
import ScoreBubble from "./ScoreBubble";

const Result = () => {
  return (
    <section className="result">
      <h3>Your Result</h3>
      <ScoreBubble />
      <div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

export default Result;
