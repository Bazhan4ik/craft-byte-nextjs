import styles from './page.module.scss'
import { Metadata } from 'next'
import ThreeScene from "./components/Three";


export const metadata: Metadata = {
  title: "Services | CraftByte"
}


export default function Home() {




  return (
    <main className={styles.main}>

      <section id={styles.intro}>
        <div className={styles.intro_text}>
          {/* <h2 className={styles.intro_slogan}>
            Empower <span className={styles.intro_slogan__your}>Your</span> business, entrust Your digital journey to <span className={styles.intro_slogan__us}>Us</span>
          </h2>
          <div className={styles.intro_subtitle}>
            <p className={styles.intro_subtitle_text}>
              Focus on the product while we take over the technical part. Seamless digital solutions for Your business growth - we handle the tech, You lead the market.
            </p>
          </div> */}
          <h2 className={styles.intro_slogan}>
            Some <span className={styles.intro_slogan__your}>very</span> cool <span className={styles.intro_slogan__us}>text</span>
          </h2>
          <div className={styles.intro_subtitle}>
            <p className={styles.intro_subtitle_text}>
              some more very cool text here.
            </p>
          </div>
        </div>
        <div className={styles.eye}>
          <ThreeScene />
        </div>
      </section>

    </main>
  )
}
