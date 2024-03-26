// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'TrayTestingApp',
  description: 'thingsto test',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* <body className={inter.className}> */}
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
