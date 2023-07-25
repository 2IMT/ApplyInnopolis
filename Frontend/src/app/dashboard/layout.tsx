import '../globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import type { Metadata, Route } from 'next'
import Header from '../components/header'
import Menu from '../components/menu'

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
    return (
        <div>
            <Header/>
            <Menu/>
            {children}
        </div>
    )
  
}
