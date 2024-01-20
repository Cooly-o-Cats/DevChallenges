import Image from "next/image"
import styles from "./css/Header.module.css"

const Header = ({name, desc, img, imgAlt}) => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.descContainer}>
            <img src="/6dots.svg"/>
            <p className={styles.desc}>{desc}</p>
        </div>
        <div className={styles.imgWrapper}>
        <Image src={img} fill alt={imgAlt} className={styles.img}/>
        </div>
    </header>
  )
}

export default Header