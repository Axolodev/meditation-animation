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
  const currentFrame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const shouldInhale =
    currentFrame < durationInFrames / 2 - 60 ||
    currentFrame > durationInFrames - 60;

  const frameFadeThreshhold = fps * 0.3;
  const holdOpacity = interpolate(
    currentFrame,
    [
      durationInFrames / 4,
      durationInFrames / 4 + frameFadeThreshhold,
      durationInFrames / 2 - frameFadeThreshhold,
      durationInFrames / 2,
      durationInFrames * 0.75,
      durationInFrames * 0.75 + frameFadeThreshhold,
      durationInFrames - frameFadeThreshhold,
      durationInFrames,
    ],
    [0, 1, 1, 0, 0, 1, 1, 0]
  );

  const inhaleExhaleOpacity = interpolate(
    currentFrame,
    [
      0,
      frameFadeThreshhold,
      durationInFrames / 4 - frameFadeThreshhold,
      durationInFrames / 4,
      durationInFrames / 2,
      durationInFrames / 2 + frameFadeThreshhold,
      durationInFrames * 0.75 - frameFadeThreshhold,
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
