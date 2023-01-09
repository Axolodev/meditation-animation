import { Composition } from "remotion";
import constants from "./constants";
import { Scene } from "./Scene";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Box-Breathing"
        component={Scene}
        durationInFrames={constants.durationInFrames}
        fps={constants.fps}
        width={1920}
        height={1080}
      />
    </>
  );
};
