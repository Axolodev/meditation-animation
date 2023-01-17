import { interpolate, useCurrentFrame } from "remotion";
import constants from "../../constants";
import styles from "../../styles";

const h1Styles: React.CSSProperties = {
  color: styles.colors.highlight,
  fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
  fontSize: 100,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: "2%",
  textAlign: "center",
};

function Heading({
  labels,
  durationInFrames,
  fadeThreshhold = constants.fps * 0.3,
  style,
}: {
  labels: string[];
  durationInFrames: number;
  fadeThreshhold?: number;
  style?: React.CSSProperties;
}) {
  const currentFrame = useCurrentFrame();
  const labelDuration = durationInFrames / labels.length;
  const labelIndex = Math.floor(currentFrame / labelDuration);
  const currentLabel = labels[labelIndex];

  const inhaleExhaleOpacity = interpolate(
    currentFrame % labelDuration,
    [0, fadeThreshhold, labelDuration - fadeThreshhold, labelDuration],
    [0, 1, 1, 0]
  );
  return (
    <h1 style={{ ...h1Styles, opacity: inhaleExhaleOpacity, ...style }}>
      {currentLabel}
    </h1>
  );
}

export default Heading;
