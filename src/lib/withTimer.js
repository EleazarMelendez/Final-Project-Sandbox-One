import React, { useState } from "react";
import { useInterval } from "usehooks-ts";

export function withTimer(Component) {
  const TimerComponent = () => {
    const [initialTime] = useState(Date.now());
    const [lastTime, setLastTime] = useState(Date.now());
    useInterval(() => {
      setLastTime(Date.now());
    }, 1000);

    return <Component seconds={Math.floor((lastTime - initialTime) / 1000)} />;
  };

  return TimerComponent;
}
