import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer() {
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">0</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

  return (
    <div className="timer-wrapper is-flex is-justify-content-center m-0">
      <CountdownCircleTimer
        isPlaying
        duration={30}
        size={90}
        strokeWidth={7}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[15, 8, 5, 0]}
        onComplete={() => ({ shouldRepeat: false, delay: 1 })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;
