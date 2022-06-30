import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = (props: any) => {
  return (
   <div>
    <h1>Dummy page</h1>
    <h1>Dummy page server side msg: {props.serverSideMsg}</h1>
    <h1> 
      <Link href="/">Go to homepage</Link>
    </h1>
   </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      serverSideMsg: 'getServerSideProps working'
    }
  }
}

export default Home
