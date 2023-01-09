import styles from "./styles";

const pulseAnimationStyle: React.CSSProperties = {
  borderRadius: "50%",
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

function Circle({
  size,
  color,
  opacity = 1,
  styles: additionalStyles,
}: {
  size: number;
  color: string;
  opacity?: number;
  styles?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        ...pulseAnimationStyle,
        background: color,
        width: styles.sizes.circle.radius * size,
        height: styles.sizes.circle.radius * size,
        opacity,
        ...additionalStyles,
      }}
    />
  );
}

export default Circle;
