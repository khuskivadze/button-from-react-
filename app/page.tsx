import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/Button/Button'

export default function Home() {
  return (
     <div className={styles.center}>
       <Button mode="fill"    title='რეგისტრაცია' />  
       {/* disabled */}
     </div>
  )
}
