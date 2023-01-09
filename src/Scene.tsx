import * as React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import constants from "./constants";
import Heading from "./Heading";
import InnerCircle from "./InnerCircle";
import OuterCircle from "./OuterCircle";
import Pulse from "./Pulse";
import styles from "./styles";

const container: React.CSSProperties = {
  transition: "background-color 4s ease-in-out",
};

export const Scene: React.FC = () => {
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
      <Heading />
      <OuterCircle />
      <InnerCircle />
      {/* <Count /> */}
    </AbsoluteFill>
  );
};
