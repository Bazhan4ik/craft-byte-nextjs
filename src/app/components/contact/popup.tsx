import styles from "./contact.module.css";
import { motion } from "framer-motion"


export default function () {
  return (
    <motion.div className={styles.popup} initial={{ bottom: "-42px" }} animate={{ bottom: "24px" }} exit={{ bottom: "-42px" }}>
      <p className={styles.popupText}>
        Your message was successfuly sent. Please wait for the reply.
      </p>
    </motion.div>
  );
}