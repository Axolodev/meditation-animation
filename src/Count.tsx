import { useCurrentFrame, useVideoConfig } from "remotion/.";
import styles from "./styles";

const CountdownStyles: React.CSSProperties = {
  color: styles.colors.highlight,
  fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
  fontSize: 80,
  position: "absolute",
  transform: "translate(-50%)",
  left: "50%",
  top: "46%",
};

/**
 * Component that renders a countdown for box-breathing. Every number is visible for
 * 1 second, then the next number is shown.
 */
function Count() {
  const currentFrame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const blockDurationInFrames = durationInFrames / 2;
  const count = Math.floor(currentFrame / blockDurationInFrames);
  return <div style={CountdownStyles}>{count}</div>;
}

export default Count;
