import Header from "./components/header"
import Footer from "./components/footer"
import './globals.css'

export default function RootLayout({children}) {
  return (
    <html>
      <head>
        <title>Amit Jhariya</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      <Header/>
      <main>
      {children}
      </main>
      <Footer/>
      </body>
    </html>
  )
}
