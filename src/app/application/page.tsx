import Card from '../components/card'
import Button from '../components/button'
import InputField from '../components/inputField'

export default function Application() {
  return (
    <main>
      <Card heading="Personal Data" body={
        <div>
          <InputField labelName="Educational Program" 
                      inputName="educational-program"/>

          <InputField labelName="First Name" 
                      inputName="first-name"/>

          <InputField labelName="Last Name" 
                      inputName="last-name"/>

          <InputField labelName="Patronymic (If any)" 
                      inputName="patronymic"/>

          <InputField labelName="Date Of Birth" 
                      inputName="birthday"
                      inputType="date"/>

          <InputField labelName="Email Address" 
                      inputName="email"
                      inputType="email"/>

          <InputField labelName="Contact Telephone Number" 
                      inputName="number"
                      inputType="tel"/>

          <InputField labelName="Where Did You Hear About Us?" 
                      inputName="where-did-you-hear"/>

          <InputField labelName="Country Where You Live" 
                      inputName="country"/>

          <InputField labelName="City" 
                      inputName="city"/>

          <InputField labelName="Citizenship" 
                      inputName="citizenship"/>

          <br />

          <Button text="SUBMIT" inputType="submit"></Button>
        </div>
      } />
    </main>
  )
}
