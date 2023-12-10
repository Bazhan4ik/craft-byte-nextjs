import styles from "./styles.module.scss";
import IntroSection from "./components/intro/intro";
import Pricing from "./components/pricing/pricing";
import Contact from "../components/contact/contact";
import Text from "./components/text_block/text_block";
import { Metadata } from "next";


const WebsitePage = () => {



  return (
    <div className={styles.main}>

      <div className={styles.content}>

        <IntroSection></IntroSection>

        <Text></Text>

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