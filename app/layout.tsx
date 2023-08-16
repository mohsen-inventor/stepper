import '/_sass/_global.scss';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stepper',
  description: 'Stepper',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0',
}

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
