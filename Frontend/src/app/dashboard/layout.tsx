import '../globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { Metadata, Route } from 'next'
import Header from '../components/header'
import Menu from '../components/menu'
import {cookies} from 'next/headers';
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Apply Innopolis: Dashboard',
  description: '',
}

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

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode,
}) {
    const authCookie = cookies().get("Auth")!.value;
    if (authCookie == undefined) {
      redirect("/login")
    }
    console.log(authCookie);

    const response = await fetch('https://cybertoad.ru/api/users/getUser', {
        cache: "no-cache",
        method: 'GET',
        headers: {
            "Auth": authCookie!,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });

    const result = (await response.json()) as GetUserResponse;

    console.log(result)

    if (result.Error = undefined) {
      redirect("/login")
    }

    return (
        <div>
            <Header username={result.FirstName + " " + result.LastName} userId={result.Id}/>
            <Menu/>
            {children}
        </div>
    )
  
}
