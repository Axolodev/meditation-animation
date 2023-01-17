import { Sequence } from "remotion";

import {
  BreathingSequence,
  breathingSequenceDuration,
} from "../sequences/BreathingSequence";
import {
  IntroSequence,
  introSequenceDuration,
} from "../sequences/IntroSequence";

const MeditationScene: React.FC = () => {
  return (
    <>
      <Sequence durationInFrames={introSequenceDuration}>
        <IntroSequence />
      </Sequence>
      <Sequence
        durationInFrames={breathingSequenceDuration}
        from={introSequenceDuration}
      >
        <BreathingSequence />
      </Sequence>
    </>
  );
};

const meditationSceneDuration =
  breathingSequenceDuration + introSequenceDuration;

export { MeditationScene, meditationSceneDuration };
