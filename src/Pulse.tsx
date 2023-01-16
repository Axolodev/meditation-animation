import {
  Audio,
  interpolate,
  Loop,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import Circle from "./Circle";
import styles from "./styles";

function Pulse() {
  const currentFrame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(currentFrame, [0, fps], [0.7, 0]);
  const size = interpolate(
    currentFrame,
    [0, fps],
    [styles.scale.circle.large, styles.scale.circle.largest]
  );
  return (
    <Circle
      size={size}
      color={styles.colors.lightGreen.default}
      opacity={opacity}
    />
  );
}

export default () => {
  const { fps } = useVideoConfig();
  return (
    <Loop durationInFrames={fps * 4}>
      <Audio
        src={staticFile("low-chime.mp3")}
        endAt={fps * 4}
        volume={(f) =>
          interpolate(f, [0, fps * 4], [0.5, 0], {
            extrapolateLeft: "clamp",
          })
        }
      />
      <Pulse />
    </Loop>
  );
};
