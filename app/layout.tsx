import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Brilliant Solar Solutions | Stop Paying The Power Company',
  description:
    'Indiana homeowners are replacing their electric bill with solar. 25-year warranty, 25-year production guarantee. See if your home qualifies.',
}

export const viewport: Viewport = {
  themeColor: '#0B1D3A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WT6TZ6Q6');
          `}
        </Script>
      </head>
      <body className={`${_inter.variable} ${_poppins.variable} font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WT6TZ6Q6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
        <Script src="https://fast.wistia.com/embed/a2k3dmo2jc.js" strategy="afterInteractive" type="module" />
        <Script src="https://api.netscoreapp.com/js/form_embed.js" strategy="lazyOnload" />
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  )
}
