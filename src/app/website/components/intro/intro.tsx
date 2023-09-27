import styles from "./intro.module.css";




const component = () => {


  return (
    <section id={styles.intro}>
      <div className={styles.intro_titleContainer}>
        <h1 className={styles.intro_title}>Website</h1>
      </div>


      <div className={styles.intro_cards}>
        <div className={styles.intro_card}>
          <h3 className={styles.intro_cardPercentage}>98%</h3>
          <p className={styles.intro_cardText}>Customers use the internet to <span className={styles.intro_cardTextGreen}>discover</span> local businesses</p>
        </div>
        <div className={styles.intro_card}>
          <h3 className={styles.intro_cardPercentage}>79%</h3>
          <p className={styles.intro_cardText}>Mobile searches result in <span className={styles.intro_cardTextGreen}>offline purchase</span></p>
        </div>
        <div className={styles.intro_card}>
          <h3 className={styles.intro_cardPercentage}>56%</h3>
          <p className={styles.intro_cardText}>Consumers say they <span className={styles.intro_cardTextRed}>don't trust</span> a business without a website</p>
        </div>
      </div>
    </section>
  )
}


export default component;