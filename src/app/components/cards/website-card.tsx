import Link from "next/link";
import styles from "./card.module.css";


const WebsiteCard = () => {
  return (
    <div className={styles.card}>

      <div className={styles.cardWrap}>
        <div className={styles.title}>
          <h3>Websites</h3>
        </div>

        <div className={styles.description}>
          <p>Need a website for your business?</p>
          <p>We will build you a beautiful website using modern technologies.</p>
          <p>Fast, Reliable, Cheap.</p>
        </div>

        <div className={styles.buttonWrap}>
          <Link className={styles.button_Link} href="website">Learn more</Link>
        </div>
      </div>


    </div>
  )
}



export default WebsiteCard;