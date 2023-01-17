import * as React from "react";
import { AbsoluteFill, Loop, useCurrentFrame } from "remotion";
import constants from "../../constants";
import Heading from "../atoms/Heading";
import InnerCircle from "../atoms/InnerCircle";
import OuterCircle from "../atoms/OuterCircle";
import Pulse from "../molecules/Pulse";
import styles from "../../styles";

const container: React.CSSProperties = {
  transition: "background-color 4s ease-in-out",
};

const Sequence: React.FC = () => {
  const { fps } = constants;
  const currentFrame = useCurrentFrame();
  const backgroundColor =
    currentFrame > constants.durationInFrames / 2
      ? styles.colors.darkGreen.default
      : styles.colors.darkGreen.light;

  return (
    <AbsoluteFill
      style={{
        ...container,
        backgroundColor,
      }}
    >
      <Pulse />
      <OuterCircle />
      <Loop durationInFrames={fps * 16} layout="none">
        <InnerCircle />
        <Heading
          labels={["Inhale", "Hold", "Exhale", "Hold"]}
          durationInFrames={fps * 16}
        />
      </Loop>
    </AbsoluteFill>
  );
};

const duration = constants.fps * 16 * constants.loops;

export { Sequence as BreathingSequence, duration as breathingSequenceDuration };
