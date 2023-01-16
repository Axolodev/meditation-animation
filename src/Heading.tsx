import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import styles from "./styles";

const h1Styles: React.CSSProperties = {
  color: styles.colors.highlight,
  fontFamily: 'Helvetica, "Helvetica Neue", Arial, sans-serif',
  fontSize: 100,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  top: "2%",
};

function Heading() {
  const { durationInFrames, fps } = useVideoConfig();
  const currentFrame = useCurrentFrame() % durationInFrames;

  const shouldInhale =
    currentFrame < durationInFrames / 2 - 60 ||
    currentFrame > durationInFrames - 60;

  const fadeThreshhold = fps * 0.3;
  const holdOpacity = interpolate(
    currentFrame,
    [
      durationInFrames / 4,
      durationInFrames / 4 + fadeThreshhold,
      durationInFrames / 2 - fadeThreshhold,
      durationInFrames / 2,
      durationInFrames * 0.75,
      durationInFrames * 0.75 + fadeThreshhold,
      durationInFrames - fadeThreshhold,
      durationInFrames,
    ],
    [0, 1, 1, 0, 0, 1, 1, 0]
  );

  const inhaleExhaleOpacity = interpolate(
    currentFrame,
    [
      0,
      fadeThreshhold,
      durationInFrames / 4 - fadeThreshhold,
      durationInFrames / 4,
      durationInFrames / 2,
      durationInFrames / 2 + fadeThreshhold,
      durationInFrames * 0.75 - fadeThreshhold,
      durationInFrames * 0.75,
    ],
    [0, 1, 1, 0, 0, 1, 1, 0]
  );
  return (
    <>
      <h1 style={{ ...h1Styles, opacity: holdOpacity }}>Hold</h1>
      <h1 style={{ ...h1Styles, opacity: inhaleExhaleOpacity }}>
        {shouldInhale ? "Inhale" : "Exhale"}
      </h1>
    </>
  );
}

export default Heading;
