import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'server actions and jsx',
  description: 'Explore server actions which returns JSX',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
