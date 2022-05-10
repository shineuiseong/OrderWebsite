import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from '../components/Featured'
import ItemList from '../components/ItemList'
import axios from 'axios'
export default function Home({ pizzaList, admin }) {
  return (
    <div>
      <Head>
        <title>Stack Shines OrderSite</title>
        <meta name="description" content="Order Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <ItemList pizzaList={pizzaList} />
    </div>
  )
}
export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ''
  let admin = false

  if (myCookie.token === process.env.TOKEN) {
    admin = true
  }

  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  }
}
