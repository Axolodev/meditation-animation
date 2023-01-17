import { AbsoluteFill, Sequence as RemotionSequence } from "remotion";
import constants from "../../constants";
import Heading from "../atoms/Heading";
import styles from "../../styles";
import SignalChime from "../molecules/SignalChime";

const animationStartDelay = constants.fps * 1.5;
const animationDuration = constants.fps * 5;
const duration = animationDuration + animationStartDelay + constants.fps;

const Sequence: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: styles.colors.darkGreen.light,
      }}
    >
      <RemotionSequence from={animationStartDelay}>
        <SignalChime />
        <Heading
          labels={["Meditation starting in"]}
          durationInFrames={animationDuration}
          style={{
            top: "10%",
          }}
        />
        <Heading
          labels={["4", "3", "2", "1"]}
          durationInFrames={animationDuration}
          style={{
            top: "30%",
            fontSize: 200,
          }}
        />
      </RemotionSequence>
    </AbsoluteFill>
  );
};

export { Sequence as IntroSequence, duration as introSequenceDuration };
