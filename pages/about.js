import Image from "next/image";
import Mynav from "./Navbar";
import styles from '../styles/Home.module.scss';
import Head from 'next/head';
const about = () => {
    return(<>
    <Head>
        <title>About</title>
        <meta name="viewport" content="widht=device-width,initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      
      </Head>
    <Mynav />
    <div style={{textAlign:"center"}}>
    <h1> About</h1>
    <Image src="/demo.jpg" alt="demo" width="500" height="300"></Image>
    </div>
  
    </>
    )
}

export default about;