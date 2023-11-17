import Image from 'next/image'
import styles from './page.module.css'
import Button from './components/Button/Button'
import { Fascinate } from 'next/font/google';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';

export default function Home() {

  // const userIsRegistration  = true; // conditional rendening pattern

  return (
    <> 
      <div className={styles.center}>
        <h1>Primery <span>Button</span></h1>
        <Button mode="fill"    title='რეგისტრაცია' />  
        <Button mode="outline"    title='რეგისტრაცია' />  
       {/* disabled */}
      </div>

      <div className={styles.center}>
        <h1>Primery <span>Button</span> with icon</h1>
        <ButtonIcon mode='fill'title='ავტორიზაცია'/>  
        <ButtonIcon mode='outline' title='ავტორიზაცია'/>  
      </div>


    </>
    
  
  
  
  
  
  )









}

// {
//   const  userLogIn =  true
//   userLogIn ?
//    <Button mode="fill"    title='გამპოსვლის ღილაკი' />
//    : <Button mode="fill"    title='ავტორიზაციის ღილაკი' />
// }
