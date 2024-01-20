import Header from "@/components/Header";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import RecipeInfo from "@/components/RecipeInfo";
import Head from "next/head";
import styles from "../components/css/Footer.module.css"

export default function Home({ recipe }) {
  return (
    <>
      <Head>
        <title>Recipe Page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header
        name={recipe.name}
        desc={recipe.desc}
        img={recipe.headerImg}
        imgAlt={recipe.imgAlt}
      />
      <main>
        <div className="mainText">
          <Ingredients Ingredients={recipe.ingredients} />
          <Instructions instructions={recipe.instructions} />
        </div>
        <RecipeInfo
          servings={recipe.recipeInfo.amount}
          prepTime={recipe.recipeInfo.prepTime}
          cookTime={recipe.recipeInfo.cookTime}
          totalTime={recipe.recipeInfo.totalTime}
        />
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Created by <a href="https://devchallenges.io/portfolio/Cooly-o-Cats" className={styles.footerUser}>Liam Reitsma</a> - devChallenges.io</p>
      </footer>
    </>
  );
}

// Data SSR
export async function getStaticProps() {
  const res = await fetch("https://www.jsonkeeper.com/b/U56A/");
  const recipe = await res.json();

  return {
    props: {
      recipe,
    },
  };
}
