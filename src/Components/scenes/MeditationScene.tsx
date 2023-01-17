import { Sequence } from "remotion";

import {
  BreathingSequence,
  breathingSequenceDuration,
} from "../sequences/BreathingSequence";
import {
  IntroSequence,
  introSequenceDuration,
} from "../sequences/IntroSequence";
import {
  OutroSequence,
  outroSequenceDuration,
} from "../sequences/OutroSequence";

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
      <Sequence
        durationInFrames={outroSequenceDuration}
        from={introSequenceDuration + breathingSequenceDuration}
      >
        <OutroSequence />
      </Sequence>
    </>
  );
};

const meditationSceneDuration =
  breathingSequenceDuration + introSequenceDuration + outroSequenceDuration;

export { MeditationScene, meditationSceneDuration };
