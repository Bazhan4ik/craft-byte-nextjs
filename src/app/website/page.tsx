import styles from "./styles.module.css";
import IntroSection from "./components/intro/intro";
import CapabilitiesSection from "./components/capabilities/capabilities";
import Pricing from "./components/pricing/pricing";
import Contact from "../components/contact/contact";
import { Metadata } from "next";


const WebsitePage = () => {



  return (
    <div className={styles.main}>

      <div className={styles.content}>

        <IntroSection></IntroSection>

        <Pricing></Pricing>

        <Contact></Contact>

        {/* <CapabilitiesSection></CapabilitiesSection> */}

      </div>

    </div>
  )

}



export const metadata: Metadata = {
  title: "Website | CraftByte",
  description: "We build the best websites using only modern technologies."
}

export default WebsitePage;