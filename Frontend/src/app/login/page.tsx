'use client';

import styles from '../styles/reg_auth_form.module.css'
import alertStyles from '../styles/alert.module.css'

import Card from '../components/card'
import Button from '../components/button'
import Grid from '../components/grid'
import InputField from '../components/inputField'
import Alert from '../components/alert'
import { setCookie, getCookie} from '../cookies-utils';
import RootLayout from '../layout';

interface FormElements extends HTMLFormControlsCollection {
    Login: HTMLInputElement;
    Password: HTMLInputElement;
}

type AuthenticationResponse = {
    Successful: boolean;
    Token?: string;
    Error?: string;
}

function callAlert(message: string) {
    const alert = document.getElementById(alertStyles.alert);

    alert!.style.opacity = "0.75";
    alert!.textContent = message;

    setTimeout(() => {
        alert!.style.opacity = "0";
    }, 10000)
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
        setCookie("Auth", result.Token!);
        window.location.href = "/dashboard/tests";
    } else {
        callAlert(result.Error!);
    }
  }

export default function Login() {

    const authCookie = getCookie("Auth");
    if (authCookie != undefined) {
        window.location.href = "/dashboard/tests";
    }

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