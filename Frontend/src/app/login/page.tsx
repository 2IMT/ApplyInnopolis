'use client'

import styles from '../styles/reg_auth_form.module.css'
import alertStyles from '../styles/alert.module.css'

import Card from '../components/card'
import Button from '../components/button'
import InputField from '../components/inputField'
import Alert from '../components/alert'
import { useRouter } from 'next/navigation';


interface FormElements extends HTMLFormControlsCollection {
    Login: HTMLInputElement;
    Password: HTMLInputElement;
}

type AuthenticationResponse = {
    Successful: boolean;
    Token?: string;
    Error?: string;
}

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    const elements = (e.target as HTMLFormElement).elements as FormElements;

    const response = await fetch('https://cybertoad.ru/api/users/authorize', {
        cache: "no-cache",
        method: 'POST',
        body: JSON.stringify({
            Login: elements.Login.value,
            Password: elements.Password.value
        }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    const result = (await response.json()) as AuthenticationResponse;

    if (result.Successful) {
        document.cookie = "Auth=" + result.Token!;
        window.location.href = "/"
    } else {
        callAlert(result.Error!);
    }
  }

  function callAlert(message: string) {
    const alert = document.getElementById(alertStyles.alert);

    alert!.style.opacity = "0.75";
    alert!.textContent = message;

    setTimeout(() => {
        alert!.style.opacity = "0";
    }, 10000)
}

export default function Login() {
  return (
    <main style={{width: "100vw", height: "100vh", left: "0", top: "0"}}>
        <div className={styles.reg_auth_form}>
            <Card heading='Login' body={
                <form onSubmit={handleSubmit}>
                    <InputField labelName='Login' inputName='Login' inputPlaceholder='Your email or phone number'/>
                    <InputField isRequired={true} labelName='Password' inputName='Password' inputType='password' inputPlaceholder='**********'/>
                    <div style={{ textAlign: "center" }}>
                        <Button inputType='submit' text='LOGIN' />
                    </div>
                </form>
            }/>
        </div>
        <Alert/>
    </main>
  )
}