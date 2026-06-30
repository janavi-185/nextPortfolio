import type { Metadata } from 'next'
import { Figtree, EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
// @ts-ignore: side-effect import for global CSS (no type declarations)
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/shared/navbar'
import { Footer } from '@/components/shared/footer'
import { CustomCursor } from '@/components/shared/custom-cursor'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Janavi Chauhan',
  description: 'Janavi Chauhan - Software Developer Portfolio',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${figtree.variable} ${ebGaramond.variable}`}>
      <body className={`font-sans antialiased transition-all duration-300 ease-in-out`}>
        <CustomCursor />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
