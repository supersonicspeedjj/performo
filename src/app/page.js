import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/navbar/Navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <Navbar/>
    </main>
  )
}
