import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.content}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
        <div className={styles.card}>
          <div className={styles.heading}>This is</div>
          <div className={styles.sep}></div>
          <div className={styles.body}>Various information could be displayed with help of those cards</div>
        </div>
        <div className={styles.card}>
          <div className={styles.heading}>An example of some</div>
          <div className={styles.sep}></div>
          <div className={styles.body}>For example it could be basic info about user profile</div>
        </div>
        <div className={styles.card}>
          <div className={styles.heading}>Info cards</div>
          <div className={styles.sep}></div>
          <div className={styles.body}>Or maybe just some tips for user</div>
        </div>
      </div>
      <form action="#" className={styles.card}>
        <div className={styles.heading}>
          Form example
        </div>
        <div className={styles.sep}></div>
        <div className={styles.body}>
          <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <div>
              <label>Email:</label>
              <input type="text" id={styles.email} name="email" placeholder="a.example@innopolis.university"/>
            </div>
            <div>
              <label>Some number:</label>
              <input type="number" id={styles.number} name="number" placeholder="Enter some number here"/>
            </div>
          </div>
          <label>Textarea:</label>
          <textarea style={{minWidth: "100%", maxWidth: "100%", minHeight: "300px"}} name="text" id={styles.text} value={"Enter your text"}></textarea>
          <div style={{textAlign: "right"}}>
            <input type="submit" value="submit" className={styles.submit} style={{width: "fit-content"}}/>
          </div>
        </div>
      </form>
    </main>
  )
}
