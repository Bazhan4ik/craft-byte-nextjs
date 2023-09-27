"use client";


import { useState } from "react";
import styles from "./contact.module.css";
import Popup from "./popup";
import { AnimatePresence } from "framer-motion";




const isValidEmail = (email: string) => {
  return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}



const component = () => {
  const sendForm = async () => {

    if (!isValidEmail(form.email) || form.name.length < 2 || form.message.length < 2) {
      return;
    }

    try {

      setDisableEverything(true);


      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(form) });

      if (response.status != 200) {
        throw response.json();
      }

      const result = await response.json();

      if (result.success) {
        clearForm();
        showPopup();
      }
    } catch (e) {
      console.warn(await e);
    }



  }
  const handleForm = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(oldValue => ({ ...oldValue, [(event.target).name]: event.target.value }));
  }
  const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isValidEmail(event.target.value)) {
      event.target.classList.remove(styles.invalid);
    } else {
      event.target.classList.add(styles.invalid);
    }
  }
  const clearForm = () => {
    setter(() => ({ name: "", email: "", message: "" }));
    setDisableEverything(false);
  }
  const showPopup = () => {
    setModalVisibility(true);
    setTimeout(() => {
      setModalVisibility(false);
    }, 3000);
  }

  const [form, setter] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showModal, setModalVisibility] = useState(false);
  const [disableEverything, setDisableEverything] = useState(false);




  return (
    <section id={styles.contact}>

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Contact</h1>
      </div>

      <div className={styles.contact}>
        <div className={styles.contactTop}>
          <div className={`${styles.contactInput} ${styles.contactInput_name}`}>
            <p>Your Name</p>
            <input disabled={disableEverything} type="text" name="name" onChange={handleForm} value={form.name} />
          </div>
          <div className={`${styles.contactInput} ${styles.contactInput_email}`}>
            <p>Your Email</p>
            <input disabled={disableEverything} type="email" name="email" value={form.email} onChange={e => { handleForm(e); checkEmail(e); }} />
          </div>
        </div>
        <div className={`${styles.contactInput} ${styles.contactInput_msg}`}>
          <div className={styles.contactInput_msgText}>
            <p>Your Message</p>
            <p className={styles.contactInput_msgDescription}>Explain to us what kind of website do you want.</p>
          </div>
          <textarea disabled={disableEverything} placeholder="Message" value={form.message} name="message" onChange={handleForm}></textarea>
        </div>
        <div className={styles.contactBottom}>
          <p>
            We will get back to you with a prototype and further specifications.
          </p>
          <button disabled={disableEverything} onClick={sendForm}>SEND</button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && <Popup></Popup>}
      </AnimatePresence>

    </section>
  );
}






export default component;