import { UilRestaurant } from "@iconscout/react-unicons";
import { UilClock } from "@iconscout/react-unicons";
import styles from "./css/RecipeInfo.module.css";

const RecipeInfo = ({ servings, prepTime, cookTime, totalTime }) => {
  return (
    <div className={styles.recipeInfo}>
      <ul className={styles.recipeInfoList}>
        <div className={styles.infoSection}>
          <li className={styles.infoItem}>
            <UilRestaurant color="#F2994A" size="27" />
            <div className={styles.infoText}>
              <span className={styles.infoDesc}>yields</span>
              <span className={styles.infoAmountAccent}>{servings}</span>
            </div>
          </li>
          <li className={styles.infoItem}>
            <UilClock color="#4F4F4F" size="27" />
            <div className={styles.infoText}>
              <span className={styles.infoDesc}>prep time</span>
              <span className={styles.infoAmount}>{prepTime}</span>
            </div>
          </li>
        </div>
        <div className={styles.infoSection}>
          <li className={styles.infoItem}>
            <UilClock color="#4F4F4F" size="27" />
            <div className={styles.infoText}>
              <span className={styles.infoDesc}>cook time</span>
              <span className={styles.infoAmount}>{cookTime}</span>
            </div>
          </li>
          <li className={styles.infoItem}>
            <UilClock color="#4F4F4F" size="27" />
            <div className={styles.infoText}>
              <span className={styles.infoDesc}>total time</span>
              <span className={styles.infoAmount}>{totalTime}</span>
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default RecipeInfo;
