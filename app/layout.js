import Header from "../components/header"
import Footer from "../components/footer"
import '../styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
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
