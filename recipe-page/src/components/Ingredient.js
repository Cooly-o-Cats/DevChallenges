import styles from "./css/Ingredient.module.css"

const Ingredient = ({measure, ingredientDesc, ingredient, optionalIngredients, details, id}) => {
  const measureText = measure ? measure : ""
  const descText = ingredientDesc ? ingredientDesc : ""
  const ingredientText = ingredient ? ingredient : ""
  const optionalText = optionalIngredients ? optionalIngredients.join(", ") : ""
  const detailText = details ? details : ""

  return (
    <>
    <div className={styles.ingredientContainer}>
      <input className={styles.checkboxInput} id={`ingredient-${id}`} type="checkbox"/>
      <label className={styles.checkbox} htmlFor={`ingredient-${id}`}>
        <span className={styles.checkboxSymbol}>
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
        </span>
        <span>{measureText} {descText} {ingredientText} {optionalText} {detailText}</span>
      </label>
    </div>
    </>
  )
}

export default Ingredient