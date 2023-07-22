import Card from './components/card'
import Button from './components/button'

export default function Home() {
  return (
    <main>
      <Card heading="English Test" body={<span>
        Time: 45 min<br></br>
        Attempts: 1<br></br>
        <Button text="START" inputType="button" />
      </span>} />
      <Card heading="Programming Test" body={<span>
        Time: 90 min<br></br>
        Attempts: 1<br></br>
        <Button text="START" inputType="button" />
      </span>} />
      <Card heading="Math Test" body={<span>
        Time: 120 min<br></br>
        Attempts: 1<br></br>
        <Button text="START" inputType="button" />
      </span>} />
    </main>
  )
}
