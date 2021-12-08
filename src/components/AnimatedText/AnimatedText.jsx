import React from "react";
import { Wave } from "react-animated-text";

function AnimatedText({
  text,
  effect = "stretch",
  duration = 3,
  effectDuration = 0.5,
}) {
  const [paused, setPaused] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setPaused(true);
    }, duration * 1000);
  }, []);
  return (
    <Wave
      text={text}
      effect={effect}
      effectChange={2.0}
      paused={paused}
      effectDuration={effectDuration}
    />
  );
}

export default AnimatedText;
