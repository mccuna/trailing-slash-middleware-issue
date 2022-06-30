import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = (props: any) => {
  return (
   <div>
    <h1>Homepage</h1>
    <h1>Homepage server side msg: {props.serverSideMsg}</h1>
    <h1>
      <Link href="/dummy">Go to dummy</Link>
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
