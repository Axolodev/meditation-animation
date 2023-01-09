import Circle from "./Circle";
import styles from "./styles";

function OuterCircle() {
  return (
    <Circle
      size={styles.scale.circle.large}
      color={styles.colors.lightGreen.light}
    />
  );
}

export default OuterCircle;
