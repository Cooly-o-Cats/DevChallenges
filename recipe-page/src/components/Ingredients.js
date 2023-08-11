import IngredientSection from "./IngredientSection"
import styles from "./css/Ingredients.module.css"

const Ingredients = ({Ingredients}) => {
  return (
    <div className={styles.ingredientsWrapper}>
        <h2 className={styles.title}>Ingredients</h2>
        {Ingredients.map(section => (
            <IngredientSection key={section.key} sectionName={section.sectionName} sectionIngredients={section.ingredients}/>
        ))}
    </div>
  )
}

export default Ingredients