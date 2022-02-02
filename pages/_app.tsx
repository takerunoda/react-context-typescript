import { AppProps } from 'next/app'
import { PageWrapper } from '../context/PageContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps } : AppProps) {
  return (
  <>
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>  
  </>
  )
}

export default MyApp
