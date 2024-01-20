import Ingredient from "./Ingredient";
import styles from "./css/IngredientSection.module.css"

const IngredientSection = ({sectionName, sectionIngredients}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{sectionName}</h3>
      <ul className={styles.list}>
        {sectionIngredients.map((ingredient) => (
          <Ingredient
            key={ingredient.key}
            id={ingredient.key}
            measure={ingredient.measure}
            ingredientDesc={ingredient.ingredientDesc}
            ingredient={ingredient.ingredient}
            optionalIngredients={ingredient.optionalIngredients}
            details={ingredient.details}
          />
        ))}
      </ul>
    </div>
  );
};

export default IngredientSection;
