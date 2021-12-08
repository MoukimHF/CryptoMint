import React from "react";
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';
const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return "Here we go!";
    } else {
      return (
        <div className="CountDown">
        <div className="Main__Margin px-5 lg:px-12 rounded">
          <div
            className="CountDown__inner md:px-8 md:pt-16"
            style={{ paddingTop: "4rem" }}
          >
            <p className="text-center text-base md:text-2xl font-thin tracking-wide uppercase mb-6 gray-100">
              Presale Launches In
            </p>
            <div className="CountDown__timer px-4 md:px-0">
              <div className="text-center">
                <p className="CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1">
                  {days}
                </p>
                <p className="uppercase text-xs text-sm md:text-base font-light gray-100">
                  Days
                </p>
              </div>
              <div className="text-center">
                <p className="CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1">
                  {hours}
                </p>
                <p className="uppercase text-xs md:text-base font-light gray-100">
                  hours
                </p>
              </div>
              <div className="text-center">
                <p className="CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1">
                  {minutes}
                </p>
                <p className="uppercase text-xs md:text-base font-light gray-100">
                  minutes
                </p>
              </div>
              <div className="text-center">
                <p className="CountDown__timer-main text-3xl md:text-8xl lg:text-9xl font-bold mb-1">
                  {seconds}
                </p>
                <p className="uppercase text-xs md:text-base font-light gray-100">
                  seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }
  };
function CountdownComp() {
  const {total,days ,hours} = calcTimeDelta(new Date("2021-12-12T00:00:00.000Z"));
  return (
    <Countdown
    date={Date.now() + total}
    renderer={renderer}
  />
  );
}

export default CountdownComp;
