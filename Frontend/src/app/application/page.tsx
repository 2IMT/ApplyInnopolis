'use client';

import Card from '../components/card'
import Button from '../components/button'
import InputField from '../components/inputField'
import Grid from '../components/grid'

import React from 'react'

interface FormData {
  educational_program: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  birthday: string;
  email: string;
  number: string;
  where_did_you_hear: string;
  country: string;
  city: string;
  citizenship: string;
}

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const target = e.target as unknown as FormData;
}

export default function Application() {
  return (
    <main>
      <Card heading="Personal Data" body={
        <form onSubmit={handleSubmit} method="post">
          <InputField labelName="Educational Program"
            inputName="educational_program" />

          <Grid columns={2}>
            <InputField labelName="First Name"
              inputName="first_name" />

            <InputField labelName="Last Name"
              inputName="last_name" />
          </Grid>

          <InputField labelName="Patronymic (If any)"
            inputName="patronymic" />

          <InputField labelName="Date Of Birth"
            inputName="birthday"
            inputType="date" />

          <Grid columns={2}>
            <InputField labelName="Email Address"
              inputName="email"
              inputType="email" />

            <InputField labelName="Contact Telephone Number"
              inputName="number"
              inputType="tel" />
          </Grid>

          <InputField labelName="Where Did You Hear About Us?"
            inputName="where_did_you_hear" />

          <Grid columns={2}>
            <InputField labelName="Country Where You Live"
              inputName="country" />

            <InputField labelName="City"
              inputName="city" />
          </Grid>

          <InputField labelName="Citizenship"
            inputName="citizenship" />

          <br />

          <Button text="SUBMIT" inputType="submit"></Button>
        </form>
      } />
    </main>
  )
}
