import styles from "./styles.module.scss";
import Image from 'next/image'
import GreenLineImage from "./../../../../../public/green_line_up.png";



const component = () => {




  return (
    <section id={styles.pricing}>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Improve your chances
        </h1>
      </div>

      <div className={styles.card}>
        <div className={styles.cardText}>
          <p>Without a website, you're missing out on a vast audience of potential customers who primarily search online for products and services.</p>
          <p>A website not only legitimizes your business but also opens the door to a wider market, ensuring you don't get left behind in the competitive landscape.</p>
        </div>

        <div className={styles.cardImage}>
          <Image
            src={GreenLineImage}
            alt="Green line that goes up"
          ></Image>
        </div>
      </div>


    </section>
  )
}







export default component;