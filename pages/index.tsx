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
      <main className="p-8 text-center">
        <div className="text-blue-500 hover:underlinez">
          <Link href="/display-name" passHref>
           <p>Go to Display Name Page</p>
          </Link>
        </div>
        <div>
          <input type="text" onChange={onChangeName} required />
        </div>        
        <div>
<button className ="mt-3 bg-blue-500 hover:bg-blue-400 text-white w-36 p-2 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={handleOnclick}>Change Name</button>          
        </div>
        <div>
<button className ="mt-3 bg-green-500 hover:bg-green-400 text-white w-36 p-2 rounded focus:outline-none cursor-pointer text-sm xs:text-base;" onClick={() => setMyName("Mike")}>Reset</button> 
        </div>
        <p className="pt-5">
          My name is <span className="text-orange-500">{myName}</span> 🙋🏻
        </p>
      </main>
    </div>
  )
}
