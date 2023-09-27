import styles from "./services.module.css";
import WesiteCard from "./cards/website-card";
import SoftwareCard from "./cards/software-card";
import IdeaCard from "./cards/idea-card";

const ServicesSection = () => {





  return (
    <section id={styles.services}>

      <div className={styles.services_content}>

        <WesiteCard></WesiteCard>
        <SoftwareCard></SoftwareCard>
        <IdeaCard></IdeaCard>

      </div>

    </section>
  );
}



export default ServicesSection;