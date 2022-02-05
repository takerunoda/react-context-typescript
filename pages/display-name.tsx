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
      <main className="p-8 text-center">
        <div className="text-blue-500 hover:underlinez">
          <Link href="/" passHref>
           <p> Go to Change Name Page</p>
          </Link>
        </div>
        <p className="pt-5">
          My name is <span className="text-orange-500 font-bold underline">{myName}</span> 🙋🏻
        </p>
      </main>
    </div>
  )
}
