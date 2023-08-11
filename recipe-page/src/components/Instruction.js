import styles from "./css/Instruction.module.css"

const Instruction = ({num, title, instruction}) => {
  return (
    <div className={styles.insBox}>
        <div className={styles.numBox}>
        <p className={styles.num}>{num}</p>        
        </div>
        <p className={styles.instruction}><strong>{title}</strong> {instruction}</p>
    </div>
  )
}

export default Instruction