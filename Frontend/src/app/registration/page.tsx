'use client';

import styles from '../styles/reg_auth_form.module.css'
import alertStyles from '../styles/alert.module.css'

import Card from '../components/card'
import Button from '../components/button'
import Grid from '../components/grid'
import InputField from '../components/inputField'
import Alert from '../components/alert'
import { setCookie, getCookie} from '../cookies-utils';

interface FormElements extends HTMLFormControlsCollection {
    FirstName: HTMLInputElement;
    LastName: HTMLInputElement;
    Patronymic: HTMLInputElement;
    Email: HTMLInputElement;
    ContactPhone: HTMLInputElement;
    Citizenship: HTMLInputElement;
    Password: HTMLInputElement;
    RepeatPassword: HTMLInputElement;
}

type RegisterResponse = {
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
    
    if (elements.Password.value != elements.RepeatPassword.value) {
        callAlert("Your passwords don't match");
    }

    if (elements.Password.value.length < 8) {
        callAlert("Password length should be at least 8 characters long");
    }

    const response = await fetch('https://cybertoad.ru/api/users/register', {
        cache: "no-cache",
        method: 'POST',
        body: JSON.stringify({
            FirstName: elements.FirstName.value,
            LastName: elements.LastName.value,
            Patronymic: elements.Patronymic.value,
            Email: elements.Email.value,
            ContactPhone: elements.ContactPhone.value,
            Citizenship: elements.Citizenship.value,
            Password: elements.Password.value
        }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    const result = (await response.json()) as RegisterResponse;

    if (result.Successful) {
        setCookie("Auth", result.Token!);
        window.location.href = "/dashboard/tests";
    } else {
        callAlert(result.Error!);
    }
  }

export default function Register() {
    const authCookie = getCookie("Auth");
    if (authCookie != undefined) {
        window.location.href = "/dashboard/tests";
    }

  return (
    <main style={{width: "100vw", height: "100vh", left: "0", top: "0"}}>
        <div className={styles.reg_auth_form}>
            <Card heading='Registration' body={
                <form onSubmit={handleSubmit}>
                    <Grid columns={2}>
                        <InputField isRequired={true} labelName='First Name' inputName='FirstName' inputPlaceholder='Ivan'/>
                        <InputField isRequired={true} labelName='Last Name' inputName='LastName' inputPlaceholder='Ivanov'/>
                    </Grid>
                    <InputField labelName='Patronymic' inputName='Patronymic' inputPlaceholder='Ivanovich'/>
                    <Grid columns={2}>
                        <InputField isRequired={true} labelName='Email' inputName='Email' inputPlaceholder='example@innopolis.university'/>
                        <InputField isRequired={true} labelName='Contact Phone' inputName='ContactPhone' inputPlaceholder='+7 (999) 123 4567'/>
                    </Grid>
                    <InputField isRequired={true} labelName='Citizenship' inputName='Citizenship' inputPlaceholder='Russia'/>
                    <Grid columns={2}>
                        <InputField isRequired={true} labelName='Password' inputName='Password' inputType='password' inputPlaceholder='**********'/>
                        <InputField isRequired={true} labelName='Repeat Password' inputName='RepeatPassword' inputType='password' inputPlaceholder='**********'/>
                    </Grid>
                    <div style={{ textAlign: "center" }}>
                        <Button inputType='submit' text='REGISTER' />
                    </div>
                </form>
            }/>
        </div>
        <Alert/>
    </main>
  )
}

Register.GetLayout = function GetLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
}
