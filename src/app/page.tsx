import styles from './styles/page.module.css'
import Card from './components/card'
import Grid from './components/grid'

export default function Home() {
  return (
    <main>
      <Grid columns={3}>
        <Card heading="This is" body={<span>
          Various information could be displayed with help of those cards
        </span>} />
        <Card heading="An example of some" body={<span>
          For example it could be basic info about user profile
        </span>} />
        <Card heading="Info cards" body={<span>
          Or maybe just some tips for user
        </span>} />
      </Grid>
      <form action="#">
        <Card heading="From example" body={
          <div>
            <Grid columns={2}>
              <div>
                <label>Email:</label>
                <input type="text" id={styles.email} name="email" placeholder="a.example@innopolis.university" />
              </div>
              <div>
                <label>Some number:</label>
                <input type="number" id={styles.number} name="number" placeholder="Enter some number here" />
              </div>
            </Grid>
            <label>Textarea:</label>
            <textarea style={{ minWidth: "100%", maxWidth: "100%", minHeight: "300px" }} name="text" id={styles.text} defaultValue={"Enter your text"}></textarea>
            <div style={{ textAlign: "center" }}>
              <input type="submit" value="submit" className={styles.submit} style={{ width: "fit-content" }} />
            </div>
          </div>
        } />
      </form>
    </main>
  )
}
