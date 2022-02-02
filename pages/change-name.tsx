import Head from 'next/head'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { usePageContext } from '../context/PageContext'

export default function Home() {
  const pageContext = usePageContext()
  const {myName, setMyName} = pageContext
  const [input, setInput] = useState<string | null>(null);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value)
  }
  const handleOnclick = () => {
    input && setMyName(input)
  }

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
            HOME
          </Link>
        </div>
        <div>
          <input type="text" onChange={onChangeName} required />
        </div>        
        <div>
          <button onClick={handleOnclick} className="">
              Change Name
          </button>
        </div>
        <div>
          <button onClick={() => setMyName("Mike")} className="">
              Reset
          </button>
        </div>
        <p>
          My name is <span className="red">{myName}</span> 🙋🏻
        </p>
      </main>

    </div>
  )
}
