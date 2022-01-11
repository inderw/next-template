import Head from 'next/head';

import styles from '../styles/Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynav from './Navbar';
import Gallery from './Gallery/Gallery';
import Profiles from './Profiles/Profiles';
export default function Home() {
  return (
    <>
      {
        <Head>
          <title> Home</title>
          <meta name="viewport" content="widht=device-width,initial-scale=1.0"></meta>
          <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        </Head>

      }
      <Mynav />
      <Profiles />
      <Gallery />
    </>
  )
}
