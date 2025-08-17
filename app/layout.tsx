import { Layout } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import { getPageMap } from 'nextra/page-map'

export const metadata = {
	title: 'Love2D Docs',
	description: 'Documentation for Love2D',
}

export default async function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout
          pageMap={await getPageMap()}
          sidebar={{ autoCollapse: true }}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
