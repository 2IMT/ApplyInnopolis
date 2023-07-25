'use client'

interface FormData extends HTMLFormControlsCollection {
  first_name: HTMLInputElement;
  last_name: HTMLInputElement;
  patronymic: HTMLInputElement;
  birthday: HTMLInputElement;
  email: HTMLInputElement;
  number: HTMLInputElement;
  where_did_you_hear: HTMLInputElement;
  country: HTMLInputElement;
  city: HTMLInputElement;
  citizenship: HTMLInputElement;
}

type LOL = {
  Successful: boolean;
  Error?: string;
}

async function handleSubmit(e: React.FormEvent, token: string) {
  e.preventDefault();

  const elements = (e.target as HTMLFormElement).elements as FormData;

  const response = await fetch('https://cybertoad.ru/api/users/editData', {
        cache: "no-cache",
        method: 'POST',
        body: JSON.stringify({
            FirstName: elements.first_name.value,
            LastName: elements.last_name.value,
            Patronymic: elements.patronymic.value,
            Email: elements.email.value,
            ContactPhone: elements.number.value,
            Citizenship: elements.citizenship.value,
            City: elements.city.value,
            Country: elements.country.value,
            Source: elements.where_did_you_hear.value,
            BirthDay: elements.birthday.value
        }),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            "Auth": token
        },
    });
  
    const result = (await response.json()) as LOL;
    console.log(result);
}

export default function FormWithHandler({children, token} : {
  children: React.ReactNode,
  token: string
}){
  return (
    <form onSubmit={(e: React.FormEvent) => {handleSubmit(e, token)}} method="post">
          {children}
    </form>
  )
}