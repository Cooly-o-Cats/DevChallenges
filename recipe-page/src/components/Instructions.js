import Instruction from "./Instruction";
import styles from "./css/Instruction.module.css"

const Instructions = ({ instructions }) => {
  return (
    <div className={styles.insContainer}>
      <h3 className={styles.insTitle}>Instructions</h3>
      {instructions.map((instruction) => (
        <Instruction
          key={instruction.key}
          num={instruction.key}
          title={instruction.title}
          instruction={instruction.instruction}
        />
      ))}
    </div>
  );
};

export default Instructions;
