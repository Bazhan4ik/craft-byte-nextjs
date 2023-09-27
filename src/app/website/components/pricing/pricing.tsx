import styles from "./styles.module.css";










const component = () => {




  return (
    <section id={styles.pricing}>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Pricing
        </h1>
      </div>

      <div className={styles.cardsContainer}>
        <div className={`${styles.card} ${styles.card_green}`}>
          <h2 className={styles.cardTitle}>Informational</h2>
          <p>Concise and direct</p>
          <p className={styles.cardFeatures}>Features:</p>
          <ul>
            <li>1 page</li>
            <li>contact section</li>
            <li>about section</li>
            <li>products section</li>
            <li>beautiful design</li>
          </ul>
          <div className={styles.card_bottom}>
            <p className={styles.card_price}>
              150$-250$
            </p>
            {/* <button className={styles.card_button}>
              Choose
            </button> */}
          </div>
        </div>
        <div className={`${styles.card} ${styles.card_highlight}`}>
          <h2 className={styles.cardTitle}>Default features</h2>
          <p>Best for most businesses</p>
          <p className={styles.cardFeatures}>Features:</p>
          <ul>
            <li>1-6 pages</li>
            <li>contact form</li>
            <li>special offers</li>
            <li>feedback form</li>
            <li>better SEO</li>
          </ul>
          <div className={styles.card_bottom}>
            <p className={styles.card_price}>
              300$-700$
            </p>
            {/* <button className={styles.card_button}>
              Choose
            </button> */}
          </div>
        </div>
        <div className={`${styles.card} ${styles.card_red}`}>
          <h2 className={styles.cardTitle}>Big website</h2>
          <p>Fully customizable expirience</p>
          <p className={styles.cardFeatures}>Features:</p>
          <ul>
            <li>10+ pages</li>
            <li>newsletter</li>
            <li>analytics</li>
            <li>tracking systems</li>
            <li>and more</li>
          </ul>
          <div className={styles.card_bottom}>
            <p className={styles.card_price}>
              1000$+
            </p>
            {/* <button className={styles.card_button}>
              Choose
            </button> */}
          </div>
        </div>
      </div>

    </section>
  )
}






export default component;