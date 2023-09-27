import styles from './page.module.css'
import ServicesSection from './components/services'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Services | CraftByte"
}


export default function Home() {
  return (
    <main className={styles.main}>
      <ServicesSection />
    </main>
  )
}
