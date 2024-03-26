// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Navbar from '@/components/Navbar'
import '@/assets/styles/global.css'

export const metadata = {
  title: 'TrayTestingApp change tab title',
  // need to fine tune the description
  description: 'thingsto test',
  keywords: 'test, test, test',
}

export default function MainLayout({ children }) {
  return (
    <html lang='en'>
      {/* <body className={inter.className}> */}
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
