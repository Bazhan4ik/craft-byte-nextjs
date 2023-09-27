import styles from "./styles.module.css";
import { Metadata } from "next";
import Contact from "../components/contact/contact";

const page = () => {



  return (
    <div className={styles.main}>

      <Contact></Contact>

    </div>
  )

}



export const metadata: Metadata = {
  title: "Exciting Idea | CraftByte",
  description: "We build the best websites using only modern technologies."
}

export default page;