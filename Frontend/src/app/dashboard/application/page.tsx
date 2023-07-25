import Card from '../../components/card'
import FormWithHandler from './formWithHandler';
import Button from '../../components/button'
import InputField from '../../components/inputField'
import Grid from '../../components/grid'
import {cookies} from 'next/headers'

type GetUserResponse = {
  Id: string;
  FirstName: string;
  LastName: string;
  Patronymic: string;
  BirthDate: string;
  Email: string;
  ContactPhone: string;
  Country: string;
  City: string;
  Citizenship: string;
  Source: string;
  Error: string | undefined;
}

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const target = e.target as unknown as FormData;
}

export default async function Application() {
  const authCookie = cookies().get("Auth")!;
  
  const response = await fetch('https://cybertoad.ru/api/users/getUser', {
        cache: "no-cache",
        method: 'GET',
        headers: {
            "Auth": authCookie!.value,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    const result = (await response.json()) as GetUserResponse;
    console.log(result);

  return (
    <main>
      <Card heading="Personal Data" body={
        <FormWithHandler token={authCookie.value}>
          <Grid columns={2}>
            <InputField labelName="First Name"
              inputName="first_name" value={result.FirstName} />

            <InputField labelName="Last Name"
              inputName="last_name" value={result.LastName} />
          </Grid>

          <InputField labelName="Patronymic (If any)"
            inputName="patronymic" value={result.Patronymic} />

          <InputField labelName="Date Of Birth"
            inputName="birthday"
            inputType="date" value={result.BirthDate} />

          <Grid columns={2}>
            <InputField labelName="Email Address"
              inputName="email"
              inputType="email" value={result.Email} />

            <InputField labelName="Contact Telephone Number"
              inputName="number"
              inputType="tel" value={result.ContactPhone}/>
          </Grid>

          <InputField labelName="Where Did You Hear About Us?"
            inputName="where_did_you_hear" value={result.Source} />

          <Grid columns={2}>
            <InputField labelName="Country Where You Live"
              inputName="country"  value={result.Country}/>

            <InputField labelName="City"
              inputName="city"  value={result.City}/>
          </Grid>

          <InputField labelName="Citizenship"
            inputName="citizenship"  value={result.Citizenship}/>

          <br />

          <Button text="SUBMIT" inputType="submit"></Button>
        </FormWithHandler>
      } />
    </main>
  )
}
