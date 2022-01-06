import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './components/Navbar';

export default function Home() {
  return (
    <>
    {
      <Head>
        <title> Home</title>
        <meta name="viewport" content="widht=device-width,initial-scale=1.0"></meta>
      </Head>
    
    }
     <Mynav />
    </>
  )
}
