import {
  spring,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  SpringConfig,
} from "remotion";
import Circle from "./Circle";
import styles from "./styles";

export const InnerCircle = () => {
  const currentFrame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const isIncreasing = currentFrame < durationInFrames / 2;
  const frame = interpolate(
    currentFrame,
    [0, durationInFrames * 0.25],
    [0, durationInFrames * 0.25]
  );
  const animationDurationInFrame = durationInFrames / 4;
  const animationConfig: Partial<SpringConfig> = {
    stiffness: 50,
    damping: 100,
  };
  const driver = spring({
    frame,
    fps,
    from: styles.scale.circle.small,
    to: styles.scale.circle.large,
    durationInFrames: animationDurationInFrame,
    config: animationConfig,
  });
  const reverseDriver = spring({
    frame: frame - durationInFrames / 2,
    fps,
    from: styles.scale.circle.large,
    to: styles.scale.circle.small,
    durationInFrames: animationDurationInFrame,
    config: animationConfig,
  });

  return (
    <Circle
      size={isIncreasing ? driver : reverseDriver}
      color={styles.colors.lightGreen.default}
      styles={{
        outline: `4px solid ${styles.colors.highlight}`,
      }}
    />
  );
};

export default InnerCircle;
