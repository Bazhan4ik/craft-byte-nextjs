import Link from "next/link";
import styles from "./card.module.css";


const IdeaCard = () => {
  return (
    <div className={`${styles.card} ${styles.card_typeGreen}`}>

      <div className={styles.cardWrap}>
        <div className={styles.title}>
          <h3>Exciting idea?</h3>
        </div>

        <div className={styles.description}>
          <p>Let us help you to build your idea into reality.</p>
          <p>One of our teams will work closely with you and provide the best results you are expecting.</p>
        </div>

        <div className={styles.buttonWrap}>
          <Link className={styles.button_Link} href="idea">Let us help</Link>
        </div>
      </div>


    </div>
  );
}




export default IdeaCard;