import Link from "next/link";
import styles from "./card.module.css";


const SoftwareCard = () => {
  return (
    <div className={`${styles.card} ${styles.card_typePurple}`}>

      <div className={styles.cardWrap}>
        <div className={styles.title}>
          <h3>Other Software</h3>
        </div>

        <div className={styles.description}>
          <p>Need a mobile app? A analytics system? A bot for Twitter?</p>
          <p>We will be glad to help.</p>
        </div>

        <div className={styles.buttonWrap}>
          <Link href="other" className={styles.button_Link}>
            Contact us
          </Link>
        </div>
      </div>



    </div>
  )
}



export default SoftwareCard;