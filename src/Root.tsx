import { Composition } from "remotion";
import constants from "./constants";
import {
  MeditationScene,
  meditationSceneDuration,
} from "./Components/scenes/MeditationScene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Box-Breathing"
        component={MeditationScene}
        durationInFrames={meditationSceneDuration}
        fps={constants.fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
