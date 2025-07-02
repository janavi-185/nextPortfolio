import "./globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Janavi Chauhan | Portfolio",
  description: "Portfolio of Janavi Chauhan ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen body-font bg-light dark:bg-dark">
            <Navbar />
            <main className="pt-16">
              {children}
            </main>
            {/* <Footer/> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
