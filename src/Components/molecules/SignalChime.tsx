import {
  Audio,
  interpolate,
  Sequence,
  staticFile,
  useVideoConfig,
} from "remotion";

const SignalChime = () => {
  const { fps } = useVideoConfig();
  return (
    <>
      <Audio
        src={staticFile("high-chime.mp3")}
        endAt={fps * 1.3}
        volume={(f) =>
          interpolate(f, [0, fps * 4], [0.5, 0], {
            extrapolateLeft: "clamp",
          })
        }
      />
      <Sequence from={fps}>
        <Audio
          src={staticFile("high-chime.mp3")}
          endAt={fps * 4}
          volume={(f) =>
            interpolate(f, [0, fps * 4], [0.5, 0], {
              extrapolateLeft: "clamp",
            })
          }
        />
      </Sequence>
    </>
  );
};

export default SignalChime;
