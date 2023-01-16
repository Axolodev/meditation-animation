import { Composition } from "remotion";
import constants from "./constants";
import { Scene } from "./BreathingAnimation";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Box-Breathing"
        component={Scene}
        durationInFrames={constants.durationInFrames * 10}
        fps={constants.fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
