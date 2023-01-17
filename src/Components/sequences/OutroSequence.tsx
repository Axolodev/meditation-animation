import { AbsoluteFill, Sequence as RemotionSequence } from "remotion";
import constants from "../../constants";
import styles from "../../styles";
import SignalChime from "../molecules/SignalChime";

const animationStartDelay = constants.fps;
const animationDuration = constants.fps * 6;
const duration = animationStartDelay + animationDuration;

const Sequence: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: styles.colors.darkGreen.default,
      }}
    >
      <RemotionSequence from={constants.fps}>
        <SignalChime />
      </RemotionSequence>
    </AbsoluteFill>
  );
};

export { Sequence as OutroSequence, duration as outroSequenceDuration };
