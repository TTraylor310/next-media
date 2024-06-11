// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
import Navbar from '@/components/Navbar'
import '@/assets/styles/global.css'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'

export const metadata = {
  title: 'TrayTestingApp change tab title',
  // need to fine tune the description
  description: 'things to test',
  keywords: 'test, test, test',
}

export default function MainLayout({ children }) {
  return (
    <AuthProvider>
      <html lang='en'>
        {/* <body className={inter.className}> */}
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}
