import Head from 'next/head'
import Link from 'next/link'
import { usePageContext } from '../context/PageContext'

export default function Home() {
  const pageContext = usePageContext()
  const {myName} = pageContext
  return (
    <div className="">
      <Head>
        <title>React Context Example</title>
        <meta name="description" content="React Context Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="blue">
          <Link href="/">
            Change Name
          </Link>
        </div>
        <p>
          My name is {myName} 🙋🏻
        </p>
      </main>
    </div>
  )
}
