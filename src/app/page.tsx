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
        <div className={styles.intro_left}>
          <div className={styles.intro_text}>
            <h2 className={styles.intro_slogan}>
              I will work for <span className={styles.intro_slogan__your}>you</span> for <span className={styles.intro_slogan__us}>FREE</span>
            </h2>
            <div className={styles.intro_subtitle}>
              <p className={styles.intro_subtitle_text}>
                Yes, free. I will work for free, just give me something to do. Please.
              </p>
            </div>
          </div>
          <div className={styles.intro_buttons}>
            <a href="" className={`${styles.intro_button} ${styles.orange}`}>
              <div className={styles.intro_button_title}>
                Projects
              </div>
              <p className={styles.intro_button_subtitle}>
                See my previous work.
              </p>
            </a>
            <a href="" className={styles.intro_button}>
              <div className={styles.intro_button_title}>
                Contact
              </div>
              <p className={styles.intro_button_subtitle}>
                Send me an email.
              </p>
            </a>
          </div>
        </div>
        <div className={styles.eye}>
          <ThreeScene />
        </div>
      </section>

    </main>
  )
}
